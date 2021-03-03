import { Injectable } from '@angular/core';

export class Page<T> {
  content: T[]; 
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  numberOfElements: number;
  
}