import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewFeatureComponent } from './new-feature/new-feature.component';

const routes: Routes = [
  {path: "", component : AppComponent },
  {path: "new", component : NewFeatureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
