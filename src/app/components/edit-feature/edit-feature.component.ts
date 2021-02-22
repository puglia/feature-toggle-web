import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Feature } from 'src/app/model/feature';
import { FeatureToggleService } from 'src/app/services/feature-toggle.service';

@Component({
  selector: 'app-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.css']
})
export class EditFeatureComponent implements OnInit {

  feature: Feature;
  
  constructor(public featureToggleService: FeatureToggleService,
              public route: ActivatedRoute,
              private router: Router,
              private toaster: ToastrService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.search(params.get('id'))
    );
    this.route.queryParamMap.subscribe(
      params => {
        if(params.has('success'))
          this.toaster.
            success("Feature with saved successfully");
      });
  }

  search(text){
    if(!text || text.length == 0)
      return;
    let id = parseInt(text );
    this.featureToggleService.find(id).subscribe(
      response => this.feature = response
      );
  }

  update(feature: Feature){
    this.featureToggleService.save(feature).subscribe(
      response => {
            this.feature = response;
            this.router.navigateByUrl(`edit/${this.feature.id}?success=true`);
            this.toaster.success("Changes saved successfully");
          }
      );
  }

}
