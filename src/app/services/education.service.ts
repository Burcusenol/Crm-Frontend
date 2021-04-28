import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  apiUrl="https://localhost:44390/api/"

  constructor(private httpClient:HttpClient) { }

  add(education:Education):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"educations/add",education)
  }
}
