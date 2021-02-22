import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FeatureToggleService } from 'src/app/services/feature-toggle.service';
import { FeatureBuilder } from 'src/app/utils/feature-builder';
import { NewFeatureComponent } from '../new-feature/new-feature.component';
import { SearchFieldComponent } from '../search-field/search-field.component';

import { ListFeatureComponent } from './list-feature.component';

describe('ListFeatureComponent', () => {
  let component: ListFeatureComponent;
  let fixture: ComponentFixture<ListFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFeatureComponent,
        SearchFieldComponent ],
      imports: [
          FormsModule,HttpClientModule,RouterModule.forRoot([])
        ],
      providers: [{provide: APP_BASE_HREF, useValue: ''},
                  {provide: FeatureToggleService, useValue: {
                    list: (id) => of(new FeatureBuilder().list(5))
                  }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find features', () => {
    component.search('0');
    expect(component.features.length).toEqual(5);
    expect(component.features).toEqual(new FeatureBuilder().list(5));
  });

  it('should not find features', () => {
    component.search(null);
    expect(component.features.length).toEqual(0);
    expect(component.features).toEqual([]);
  });
});
