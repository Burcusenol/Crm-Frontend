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

  

  add()
  {
    let homeModel = Object.assign({}, this.homeAddForm.value);
    this.homeService.add(homeModel).subscribe(response=>{ 
      this.toastrService.success(response.message,"Başarılı")
    }
    )};
}

