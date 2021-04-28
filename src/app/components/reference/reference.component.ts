import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  reference:Reference[]=[];
  filterText="";
  constructor(private referenceService:ReferenceService,
   ) { }

  ngOnInit(): void {
    this.getReference();
  }

  getReference() {
    this.referenceService.getReference().subscribe(response=>{
      this.reference=response.data
      
    })
  }

}
