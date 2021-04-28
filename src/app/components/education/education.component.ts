import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
educationAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private educationService:EducationService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createEducationForm();
  }

  createEducationForm(){
    this.educationAddForm=this.formBuilder.group({
      educationStatus:["",Validators.required],
      graduationDate:["",Validators.required],
      militaryStatus:["",Validators.required],
      lastSchool:[ "",Validators.required],
      language:["",Validators.required]

    })
  }

  add() {
    if (this.educationAddForm.valid) {
      let educationModel = Object.assign({}, this.educationAddForm.value);
      this.educationService.add(educationModel).subscribe(response=>{ 
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
