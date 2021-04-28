import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { TcCard } from '../models/tccard';

@Injectable({
  providedIn: 'root'
})
export class TccardService {
  apiUrl="https://localhost:44390/api/";
  
  constructor(private httpClient:HttpClient) { }

  add(tccard:TcCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"tccards/add",tccard)
  }
}
