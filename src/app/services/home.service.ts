import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../models/home';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl="https://localhost:44390/api/";
  constructor(private httpClient:HttpClient) { }

  add(home:Home):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"homes/add",home)
  }
}
