import { Component, OnInit } from '@angular/core';
import { Feature } from '../model/feature';
import { FeatureToggleService } from '../services/feature-toggle.service';

@Component({
  selector: 'app-new-feature',
  templateUrl: './new-feature.component.html',
  styleUrls: ['./new-feature.component.css','../app.component.css']
})
export class NewFeatureComponent implements OnInit {

  feature: Feature;

  formType: number = 1;
  customerIdList: number[] = [];

  formRangeStart: number;
  formRangeEnd: number;
  formIdList: string;

  constructor(public featureToggleService: FeatureToggleService) { }

  ngOnInit() {
    this.feature = new Feature();
    //Set up default values of feature
    this.feature.inverted = false;
  }

  //Call API to save the Feature
  create(){
    let feature = new Feature();
    this.feature.customers = this.customerIdList;
    this.featureToggleService.save(this.feature).subscribe(
      response => this.feature = response
      );
  }

  //Add the ids from formRangeStart to formRangeEnd to customer list
  //TODO: validate range
  addRange(){
    for(let i =this.formRangeStart;i <= this.formRangeEnd; i++ )
      this.customerIdList.push(i);
    this.customerIdList.sort();
  }

  //Add comma-separated numbers to the customer list
  addList(){
    //TODO: validate format/add mask
    let ids = this.formIdList.split(',').map(id => parseInt(id));
    this.customerIdList = this.customerIdList.concat(ids);
    this.customerIdList.sort();
  }

}
