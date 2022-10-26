import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { companymodel } from '../Model/companymodel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:3000/company';

  Getallcomapny(): Observable<companymodel[]> {
    return this.http.get<companymodel[]>(this.apiurl);
  }

  CreateComapny(companydata: any) {
    return this.http.post(this.apiurl, companydata);
  }
}
