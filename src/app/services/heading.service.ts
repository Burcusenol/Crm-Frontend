import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Identity } from '../models/identity';
import { ResponseModel } from '../models/responseModel';
import { IdentityService } from './identity.service';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {
  apiUrl="https://localhost:44390/api/";

  
    constructor(private httpClient:HttpClient){}
    
    add(identity:Identity){
      return this.httpClient.post<ResponseModel>(this.apiUrl+"identities/add",identity)
    }

    
}
