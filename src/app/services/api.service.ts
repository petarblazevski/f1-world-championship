import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getResultsByYear(year: number): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${environment.motorRacingApiEndpoint}/${year}/results/1.json`);
  }

}
