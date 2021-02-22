import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Feature } from 'src/app/model/feature';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.css','../../app.component.css']
})
export class FeatureFormComponent implements OnInit {

  @Input() feature: Feature;
  @Output() saveEvent = new EventEmitter<Feature>();

  form: FormGroup;
  deleteMode: boolean = false;

  constructor(private builder: FormBuilder,
              private toaster: ToastrService) { }

  ngOnInit() {
    this.loadForm();
  }

  ngOnChanges() {
    this.loadForm();
  }

  loadForm(){
    this.form = this.builder.group({
      displayName: [this.feature.displayName,[Validators.required,Validators.max(256)]],
      technicalName: [this.feature.technicalName,[Validators.required,Validators.max(256)]],
      expiresOn: [this.feature.expiresOn,[]],
      description: [this.feature.description,[Validators.max(256)]],
      inverted: [this.feature.inverted,[]],
    });
  }

  save(){
    if(!this.form.valid)
      return this.toaster.error("There are fields with error");
    this.feature = Object.assign(this.feature, this.form.value);
    this.saveEvent.emit(this.feature);
  }

  commit(ids: number[]) {
    ids.map( (id) => 
    {
      if(this.feature.customers.indexOf(id) < 0)
      this.feature.customers.push(id);
    });
    this.feature.customers.sort( (a,b) =>  a - b);
  }

  control(field) { 
    return this.form.controls[field]; 
  }

  remove(id){
    this.feature.customers = this.feature.customers.filter(
      (item) => item !== id)
  }

}
