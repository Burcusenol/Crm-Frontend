import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  identityAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private identityService:IdentityService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createIdentityAddForm();
  }

  createIdentityAddForm(){
    this.identityAddForm=this.formBuilder.group({
      birthPlace:["",Validators.required],
      fatherName:["",Validators.required],
      motherName:["",Validators.required],
      place:["",Validators.required],
      nationality:["",Validators.required],
      nationalityStatus:["",Validators.required],
    });
  }

  add() {
    if (this.identityAddForm.valid) {
      let identityModel = Object.assign({}, this.identityAddForm.value);
      this.identityService.add(identityModel).subscribe(response=>{ 
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
             this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası");
          }
         
        }

      });
     
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }

  }
}

