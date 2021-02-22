import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CustomerIdFormComponent } from './customer-id-form.component';

describe('CustomerIdFormComponent', () => {
  let component: CustomerIdFormComponent;
  let fixture: ComponentFixture<CustomerIdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerIdFormComponent ],
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
    fixture = TestBed.createComponent(CustomerIdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build ids from range', () => {
    component.formRangeStart = '1';
    component.formRangeEnd = '16';
    component.addRange();
    expect(component.ids).not.toEqual(null);
    expect(component.ids).not.toEqual([]);
    expect(component.ids.length).toEqual(16);
  });

  it('should add ids from the range', () => {
    component.formRangeStart = '1';
    component.formRangeEnd = '7';
    component.addRange();
    expect(component.ids).toEqual([1,2,3,4,5,6,7]);
  });

  
  it('should clear list after addRange', () => {
    component.formRangeStart = '1';
    component.formRangeEnd = '7';
    component.addRange();
    component.formRangeStart = '8';
    component.formRangeEnd = '11';
    component.addRange();
    expect(component.ids.length).toEqual(4);
  });

  it('should build ids from list', () => {
    component.formIdList = '10,20,30,40,50,60,70';
    component.addList();
    expect(component.ids).not.toEqual(null);
    expect(component.ids).not.toEqual([]);
    expect(component.ids.length).toEqual(7);
  });

  it('should add ids from list', () => {
    component.formIdList = '10,20,30,40,50,60,70';
    component.addList();
    expect(component.ids).toEqual([10,20,30,40,50,60,70]);
  });

  it('should clear list after addList', () => {
    component.formIdList = '10,20,30,40,50,60,70';
    component.addList();
    component.formIdList = '90, 100';
    component.addList();
    expect(component.ids.length).toEqual(2);
  });

});
