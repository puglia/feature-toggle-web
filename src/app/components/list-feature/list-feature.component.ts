import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feature } from 'src/app/model/feature';
import { FeatureToggleService } from 'src/app/services/feature-toggle.service';

@Component({
  selector: 'app-list-feature',
  templateUrl: './list-feature.component.html',
  styleUrls: ['./list-feature.component.css','../../app.component.css']
})
export class ListFeatureComponent implements OnInit {

  features: Feature[] = [];

  constructor(public featureToggleService: FeatureToggleService,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.search(params.get('customer-id'))
    ); 
  }

  search(text){
    if(!text || !text.length)
      return;

    let id = parseInt(text);
    this.featureToggleService.list(id).subscribe(
      response => this.features = response.content
    );
  }

}
