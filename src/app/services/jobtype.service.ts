import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobType } from '../models/jobtype';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class JobtypeService {

  apiUrl="https://localhost:44390/api/";
  constructor(private httpClient:HttpClient) { }

  add(jobType:JobType){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"jobtype/add",jobType)
  }
}
