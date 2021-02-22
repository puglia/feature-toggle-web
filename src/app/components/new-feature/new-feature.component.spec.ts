import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxMaskModule } from 'ngx-mask';
import { of } from 'rxjs/internal/observable/of';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Feature } from 'src/app/model/feature';
import { FeatureToggleService } from 'src/app/services/feature-toggle.service';
import { FeatureBuilder } from 'src/app/utils/feature-builder';
import { CustomerIdFormComponent } from '../customer-id-form/customer-id-form.component';
import { EditFeatureComponent } from '../edit-feature/edit-feature.component';
import { FeatureFormComponent } from '../feature-form/feature-form.component';
import { ListFeatureComponent } from '../list-feature/list-feature.component';

import { NewFeatureComponent } from './new-feature.component';

describe('NewFeatureComponent', () => {
  let component: NewFeatureComponent;
  let fixture: ComponentFixture<NewFeatureComponent>;
  let featureToggleService: FeatureToggleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NewFeatureComponent,
        FeatureFormComponent,
        CustomerIdFormComponent
      ],
      imports: [
          FormsModule,
          HttpClientModule,
          ReactiveFormsModule,
          RouterModule.forRoot([])
        ],
      providers: [{provide: APP_BASE_HREF, useValue: ''},
                  {provide: FeatureToggleService, useValue: {
                    save: (feature) => of(feature)
                  }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save new feature', () => {
    let builder = new FeatureBuilder();
    let feature = builder.build();

    let newFeature = builder.from(feature);
    let cloneFeature = builder.from(newFeature);
    component.create(newFeature);
    expect(component.feature).toEqual(cloneFeature);
  });


});
