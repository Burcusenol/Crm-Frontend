import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UpdateService } from 'src/app/services/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private updateService:UpdateService,
    private toastrService:ToastrService
    ) { }


  ngOnInit(): void {
  }
  createHeadingAddForm(){
    this.updateAddForm=this.formBuilder.group({
      id:["",Validators.required],
      persontype:["",Validators.required],
      kvkStatus:["",Validators.required],
      personName:["",Validators.required],
      personStatus:["",Validators.required],
      segment:["",Validators.required],
      actionSegment:["",Validators.required],
      portfolio:["",Validators.required],
      riskClass:["",Validators.required]

    })
  }
  add() {
    if (this.updateAddForm.valid) {
      let updateModel = Object.assign({}, this.updateAddForm.value);
      this.updateService.add(updateModel).subscribe(response=>{ 
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
