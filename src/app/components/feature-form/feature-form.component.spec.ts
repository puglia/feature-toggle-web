import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatureBuilder } from 'src/app/utils/feature-builder';
import { CustomerIdFormComponent } from '../customer-id-form/customer-id-form.component';

import { FeatureFormComponent } from './feature-form.component';

describe('FeatureFormComponent', () => {
  let component: FeatureFormComponent;
  let fixture: ComponentFixture<FeatureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FeatureFormComponent,
        CustomerIdFormComponent 
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: ''},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureFormComponent);
    component = fixture.componentInstance;
    component.feature = new FeatureBuilder().build();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new customer', () => {
    const ids = [1,2,3,4,5];
    component.commit(ids);
    ids.map(id => expect(component.feature.customers).toContain(id) )
  });

  it('should return a control', () => {
    expect(component.control('displayName')).not.toEqual(null);
    expect(component.control('technicalName')).not.toEqual(null);
    expect(component.control('description')).not.toEqual(null);
    expect(component.control('inverted')).not.toEqual(null);
  });
});
