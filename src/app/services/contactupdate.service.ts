import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUpdate } from '../models/contactUpdate';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactupdateService {
  apiUrl="https://localhost:44390/api/";
  
  constructor(private httpClient:HttpClient) { }

  update(contactUpdate:ContactService){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"addresses/add",contactUpdate)
  }

  getContactUpdate():Observable<ListResponseModel<ContactUpdate>> {
    let newPath=this.apiUrl+"contactupdate/getall" 
    return this.httpClient.get<ListResponseModel<ContactUpdate>>(newPath);
  }
}
