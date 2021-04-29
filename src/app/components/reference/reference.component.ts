
import { Component, OnInit } from '@angular/core';
import { Reference } from 'src/app/models/reference';
import { ReferenceService } from 'src/app/services/reference.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  references:Reference[]=[];
  constructor(private referenceService:ReferenceService,
   ) { }

  ngOnInit(): void {
    this.getReference();
  }

  getReference() {
    this.referenceService.getReference().subscribe(response=>{
      this.references=response.data
      
    })
  }

}
