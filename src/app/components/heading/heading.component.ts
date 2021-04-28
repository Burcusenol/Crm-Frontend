import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/services/address.service';
import { HeadingService } from 'src/app/services/heading.service';
import { textChangeRangeIsUnchanged, validateLocaleAndSetLanguage } from 'typescript';



@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

headingAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private headingService:HeadingService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.createHeadingAddForm();
  }
  createHeadingAddForm(){
    this.headingAddForm=this.formBuilder.group({
      department:["",Validators.required],
      identification:["",Validators.required],
      name:["",Validators.required],
      surName:["",Validators.required],
      birthDate:["",Validators.required],
      gender:["",Validators.required],
      firstDate:["",Validators.required],
      kvk:["",Validators.required],
      contactLanguage:["",Validators.required]

    })
  }
  add() {
    if (this.headingAddForm.valid) {
      let headingModel = Object.assign({}, this.headingAddForm.value);
      this.headingService.add(headingModel).subscribe(response=>{ 
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
             this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası");
          }
         
        }

      });
     
    } else {
      this.toastrService.error('Lütfen muhatabın Ad, Soyad ve en az bir iletişim bilgisini giriniz.', 'Dikkat');
    }

  }



}



