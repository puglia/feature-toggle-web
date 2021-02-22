import { Injectable } from '@angular/core';
import { build$ } from 'protractor/built/element';
import { Feature } from '../model/feature';

export class FeatureBuilder {
   id: number; 
   updateOn: Date;
   displayName: string;
   technicalName: string;
   expiresOn: Date;
   description: string;
   inverted: boolean;
   customers: number[] = [];

   construct(){
      this.id = 0;
      this.updateOn = new Date();
      this.displayName = 'Default name';
      this.technicalName = 'deafault-name';
      this.expiresOn = new Date();
      this.description = 'Default description';
      this.inverted = false;
      this.customers = [];
   }

   build(): Feature{
      let feature: Feature = new Feature();
      feature.id = this.id;
      feature.updateOn = this.updateOn;
      feature.displayName = this.displayName;
      feature.technicalName = this.technicalName;
      feature.expiresOn = this.expiresOn;
      feature.description = this.description;
      feature.inverted = this.inverted;
      feature.customers = this.customers;
      return feature;
   }

   from(feature){
      this.id = feature.id;
      this.updateOn = feature.updateOn;
      this.displayName = feature.displayName;
      this.technicalName = feature.technicalName;
      this.expiresOn = feature.expiresOn;
      this.description = feature.description;
      this.inverted = feature.inverted;
      this.customers = feature.customers;
      return this.build();
   }

   list(size){
      let list: Feature[] = [];
      for(let i = 0; i < size; i++){
         this.id += 1;
         list.push(this.build());
      }
      return list;
   }
}