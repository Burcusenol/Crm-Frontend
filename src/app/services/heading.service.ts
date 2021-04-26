import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Identity } from '../models/identity';
import { ResponseModel } from '../models/responseModel';
import { IdentityService } from './identity.service';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {
  apiUrl="https://localhost:44390/api/headings"

  
    constructor(){}
    

    
}
