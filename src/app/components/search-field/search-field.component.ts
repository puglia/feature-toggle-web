import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  @Output() event= new EventEmitter<string>();
  
  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.event.emit(this.searchText);
  }

}
