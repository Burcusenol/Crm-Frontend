import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiUrl="https://localhost:44390/api/";
  constructor(private httpClient:HttpClient) { }

  add(address:Address){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"addresses/add",address)
  }
}
