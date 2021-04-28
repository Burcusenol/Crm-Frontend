import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private contactService:ContactService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createContactAddForm();
  }

  createContactAddForm(){
    this.contactAddForm=this.formBuilder.group({
        mobilePhone:["",Validators.required],
        homePhone:["",Validators.required],
        officePhone:["",Validators.required],
        email:["",Validators.required],
        webAddress:["",Validators.required]

    });
  }
  add() {
    if (this.contactAddForm.valid) {
      let contactModel = Object.assign({}, this.contactAddForm.value);
      this.contactService.add(contactModel).subscribe(response=>{ 
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
             this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası");
          }
         
        }

      });
     
    } else {
      var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
      this.toastrService.error('En az bir iletişim bilgsi zorunludur!', 'Dikkat');
      this.toastrService.error('Girmek istediğiniz Telefon numarası ile uyuşan muhatap kaydı bulunmaktadır, lütfen bilgileri kontrol ediniz.', 'Dikkat');
    }

  }

}
