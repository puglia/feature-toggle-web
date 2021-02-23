import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { FeatureToggleService } from 'src/app/services/feature-toggle.service';
import { FeatureBuilder } from 'src/app/utils/feature-builder';
import { CustomerIdFormComponent } from '../customer-id-form/customer-id-form.component';
import { FeatureFormComponent } from '../feature-form/feature-form.component';
import { SearchFieldComponent } from '../search-field/search-field.component';

import { EditFeatureComponent } from './edit-feature.component';

describe('EditFeatureComponent', () => {
  let component: EditFeatureComponent;
  let fixture: ComponentFixture<EditFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        EditFeatureComponent,
        SearchFieldComponent,
        FeatureFormComponent,
        CustomerIdFormComponent ],
      imports: [
          FormsModule,
          HttpClientModule,
          ReactiveFormsModule,
          RouterModule.forRoot([]),
          ToastrModule.forRoot(),
          BrowserAnimationsModule
        ],
      providers: [{provide: APP_BASE_HREF, useValue: ''},
                  {provide: FeatureToggleService, useValue: {
                    save: (feature) => of(feature),
                    find: (id) => of(new FeatureBuilder().build())
                  }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save updated feature', () => {
    let builder = new FeatureBuilder();
    let feature = builder.build();

    let newFeature = builder.from(feature);
    let cloneFeature = builder.from(newFeature);
    component.update(newFeature);
    expect(component.feature).toEqual(cloneFeature);
  });

  it('should find features', () => {
    component.search('0');
    expect(component.feature).toEqual(new FeatureBuilder().build());
  });

  it('should not find features', () => {
    component.search(null);
    expect(component.feature).toEqual(undefined);
  });
});
