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

  
  public find(id: number): Observable<Feature> {
    return this.httpClient.get<Feature>(`${this.base_url}/${id.toString()}`).pipe(
        map((res) => {
          return res;
        }
    ));
  }

  public list(id: number): Observable<Feature[]> {
      return this.httpClient.get<Feature[]>(`${this.base_url}/list/${id.toString()}`)
        .pipe(
          map((res) => {
            return res;
          }
      ));
  }

    
}
