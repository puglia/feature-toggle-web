import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/internal/Observable';
import { FormGroup } from '@angular/forms';
import { Feature } from '../model/feature';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {

  private base_url =environment.serverHost + '/feature';
  private headers = { 'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': this.base_url  };

  constructor(private httpClient: HttpClient) {
    
  }

  public save(feature: Feature) {
    return this.httpClient.post<Feature>(this.base_url,JSON.stringify(feature),
        {headers: this.headers}).pipe(
          map((res) => {
            return res;
          }
    ));
  }

  /*public list(numfunc: number) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this._url + Routes.REPRESENTANTES}/${numfunc}`)
        .toPromise()
        .then(response => {
          resolve(response);
        })
        .catch(errorResponse => {
          if (errorResponse.status == HttpStatusCodes.NOT_FOUND)
            resolve([]);
          else
            reject(errorResponse.error);
        });
    });
  }

  public put(representante) {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this._url + Routes.REPRESENTANTES, this._representanteAdapter.adaptTo(representante))
        .toPromise()
        .then(response => {
          resolve(response);
        })
        .catch(errorResponse => {
          reject(errorResponse.error);
        });
    });
  }

  public sync(form: FormGroup,representante: Representante){
    for(let entry of Object.entries(form.controls)){
      let name = entry[0];
      let control = entry[1];
      if (control.dirty) {
        if(representante[name] instanceof Date)
        representante[name] = new Date(control.value);
        else
        representante[name] = control.value;
      }
    }
    return representante;
  }

  public getOriginal(id: number): Observable<Representante> {
    return this.httpClient.get<Representante>(
      `${this._url + Routes.REPRESENTANTES_ORIGINAL}?id=${id.toString()}`);
    }*/
    
}
