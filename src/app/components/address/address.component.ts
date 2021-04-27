import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private addressService:AddressService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAddressForm();
  }

  createAddressForm(){
    this.addressAddForm=this.formBuilder.group({
      recipientName:["",Validators.required],
      addressType:["",Validators.required],
      country:["",Validators.required],
      neighborhood:["",Validators.required],
      city:["",Validators.required],
      district:["",Validators.required],
      street:["",Validators.required],
      street1:["",Validators.required],
      apartment:["",Validators.required],
      apartmentNo:["",Validators.required],
      postalCode:["",Validators.required],
    });

  }
  add() {
    if (this.addressAddForm.valid) {
      let addressModel = Object.assign({}, this.addressAddForm.value);
      console.log(addressModel);
      this.addressService.add(addressModel).subscribe(response=>{ 
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
