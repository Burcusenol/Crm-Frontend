import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Identity } from '../models/identity';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  apiUrl="https://localhost:44390/api/"

  constructor(private httpClient:HttpClient) { }

  add(identity:Identity){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"identities/add",identity)
  }
}
