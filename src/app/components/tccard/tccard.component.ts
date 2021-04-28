import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TccardService } from 'src/app/services/tccard.service';

@Component({
  selector: 'app-tccard',
  templateUrl: './tccard.component.html',
  styleUrls: ['./tccard.component.css']
})
export class TccardComponent implements OnInit {
tccardAddForm:FormGroup;
  constructor(private tccardService:TccardService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createtccardAddForm();
  }

  createtccardAddForm(){
    this.tccardAddForm=this.formBuilder.group({
        identityNo:["",Validators.required],
        serialNo:["",Validators.required],
        name:["",Validators.required],
        secondName:["",Validators.required],
        surName:["",Validators.required],
        fatherName:["",Validators.required],
        motherName:["",Validators.required],
        birthPlace:["",Validators.required],
        birthDate:["",Validators.required],
        gender:["",Validators.required]
    })
  
  }


  add() {
    if (this.tccardAddForm.valid) {
      let tccardModel = Object.assign({}, this.tccardAddForm.value);
      console.log(tccardModel);
      this.tccardService.add(tccardModel).subscribe(response=>{ 
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
      this.toastrService.error('Bu alanlar boş geçilemez!', 'Dikkat');
    }

  }

}
