import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewFeatureComponent } from './components/new-feature/new-feature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditFeatureComponent } from './components/edit-feature/edit-feature.component';
import { CustomerIdFormComponent } from './components/customer-id-form/customer-id-form.component';
import { FeatureFormComponent } from './components/feature-form/feature-form.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ListFeatureComponent } from './components/list-feature/list-feature.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewFeatureComponent,
    EditFeatureComponent,
    CustomerIdFormComponent,
    FeatureFormComponent,
    ListFeatureComponent,
    SearchFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
