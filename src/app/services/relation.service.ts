import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Relation } from '../models/relation';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RelationService {
  
  apiUrl="https://localhost:44390/api/";
  
  constructor(private httpClient:HttpClient) { }

  update(relation:Relation):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"relations/update",relation)
  }

  getRelations():Observable<ListResponseModel<Relation>> {
    let newPath=this.apiUrl+"relations/getall" 
    return this.httpClient.get<ListResponseModel<Relation>>(newPath);
  }
}
