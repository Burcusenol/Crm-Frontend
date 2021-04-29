import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Reference } from '../models/reference';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  apiUrl="https://localhost:44390/api/";
  
  constructor(private httpClient:HttpClient) { }

  update(reference:Reference){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"references/update",reference)
  }

  getReference():Observable<ListResponseModel<Reference>> {
    let newPath=this.apiUrl+"references/getall" 
    return this.httpClient.get<ListResponseModel<Reference>>(newPath);
  }
}
