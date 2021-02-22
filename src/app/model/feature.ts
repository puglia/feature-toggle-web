import { Injectable } from '@angular/core';

export class Feature {
   id: number; 
   updateOn: Date;
   displayName: string;
   technicalName: string;
   expiresOn: Date;
   description: string;
   inverted: boolean = false;
   customers: number[] = [];
}