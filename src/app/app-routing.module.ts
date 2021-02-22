import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditFeatureComponent } from './components/edit-feature/edit-feature.component';
import { ListFeatureComponent } from './components/list-feature/list-feature.component';
import { NewFeatureComponent } from './components/new-feature/new-feature.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full' },
  {path: "new", component : NewFeatureComponent},
  {path: "edit", component : EditFeatureComponent},
  {path: "edit/:id", component : EditFeatureComponent},
  {path: "list", component : ListFeatureComponent},
  {path: "list/:customer-id", component : ListFeatureComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
