import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-id-form',
  templateUrl: './customer-id-form.component.html',
  styleUrls: ['./customer-id-form.component.css','../../app.component.css']
})
export class CustomerIdFormComponent implements OnInit {

  formType: number = 1;

  formRangeStart: string = '';
  formRangeEnd: string = '';
  formIdList: string;

  ids: number[];
  
  @Output() commitEvent = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
  }
  
  //Add the ids from formRangeStart to formRangeEnd to customer list
  //TODO: validate range
  addRange(){
    this.ids = [];
    for(let i =parseInt(this.formRangeStart);i <= parseInt(this.formRangeEnd); i++ )
      this.ids.push(i);

    this.commitEvent.emit(this.ids);
  }

  //Add comma-separated numbers to the customer list
  addList(){
    //TODO: validate format/add mask
    this.ids = []; 
    this.ids = this.formIdList.split(',').map(id => parseInt(id));
    
    this.commitEvent.emit(this.ids);
  }
  
}