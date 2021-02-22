import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Feature } from '../../model/feature';
import { FeatureToggleService } from '../../services/feature-toggle.service';

@Component({
  selector: 'app-new-feature',
  templateUrl: './new-feature.component.html',
  styleUrls: ['./new-feature.component.css','../../app.component.css']
})
export class NewFeatureComponent implements OnInit {

  public feature: Feature;

  nextRoute = '/edit';

  constructor(public featureToggleService: FeatureToggleService,
              private router: Router) { }

  ngOnInit() {
    this.feature = new Feature();
  }

  //Call API to save the Feature
  create(feature: Feature){
    this.featureToggleService.save(feature).subscribe(
      response => {
            this.feature = response;
            this.router.navigateByUrl(`${this.nextRoute}/${this.feature.id}?success=true`);
          }
      );
  }

}
