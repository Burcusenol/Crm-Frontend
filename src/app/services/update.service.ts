import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { PersonUpdate } from '../models/update';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  apiUrl="https://localhost:44390/api/"

  constructor(private httpClient:HttpClient) { }
  add(personupdate:PersonUpdate){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"personupdate/add",personupdate)
  }
}
