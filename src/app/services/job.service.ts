import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  apiUrl="https://localhost:44390/api/";
  constructor(private httpClient:HttpClient) { }

  add(job:Job):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"jobs/add",job)
  }
}
