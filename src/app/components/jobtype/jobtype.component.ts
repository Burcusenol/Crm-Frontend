import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobtypeService } from 'src/app/services/jobtype.service';

@Component({
  selector: 'app-jobtype',
  templateUrl: './jobtype.component.html',
  styleUrls: ['./jobtype.component.css']
})
export class JobtypeComponent implements OnInit {

  jobtypeAddForm:FormGroup;
  constructor(private joptypeService:JobtypeService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createjobTypeForm();
  }

  createjobTypeForm(){
    this.jobtypeAddForm=this.formBuilder.group({
      jobType:["",Validators.required],
      companyName:["",Validators.required],
      title:["",Validators.required],
      ssk:["",Validators.required],
      activityField:["",Validators.required],
      companyAddress:["",Validators.required],
      jobDate:["",Validators.required],
      sskNo:["",Validators.required]
    })
  }

  add() {
    if (this.jobtypeAddForm.valid) {
      let jobtypeModel = Object.assign({}, this.jobtypeAddForm.value);
      this.joptypeService.add(jobtypeModel).subscribe(response=>{ 
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
