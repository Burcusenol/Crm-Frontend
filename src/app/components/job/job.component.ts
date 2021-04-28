import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private jobService:JobService,
    private toastrService:ToastrService) { }


  ngOnInit(): void {
    this.createJobAddForm();
  }

  createJobAddForm(){
    this.jobAddForm=this.formBuilder.group({
        workingWay:["",Validators.required],
        title:["",Validators.required],
        profession:["",Validators.required],
        incomeGroup:["",Validators.required]
       

    });
  }

  add() {
    if (this.jobAddForm.valid) {
      let jobModel = Object.assign({}, this.jobAddForm.value);
      this.jobService.add(jobModel).subscribe(response=>{ 
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
      this.toastrService.error('Çalışma Şekli ve Meslek zorunludur!', 'Dikkat');
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }

  }


}
