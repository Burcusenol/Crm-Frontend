import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private homeService:HomeService,
    private toastrService:ToastrService) { }
  
  ngOnInit(): void {
    this.createhomeAddForm();
  }

  createhomeAddForm(){
    this.homeAddForm=this.formBuilder.group({
      homePersonCount:['',Validators.required],
      kidCount:['',Validators.required],
      personCount:['',Validators.required],
      year:['',Validators.required],
      homeKidCount:['',Validators.required],
      homeStatus:['',Validators.required]
    })
  }

  add() {
    if (this.homeAddForm.valid) {
      let homeModel = Object.assign({}, this.homeAddForm.value);
      this.homeService.add(homeModel).subscribe(response=>{ 
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
      this.toastrService.error('Evin durumu zorunludur!', 'Dikkat');
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }

  }
}
