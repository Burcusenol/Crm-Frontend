import { Component, OnInit } from '@angular/core';
import { Relation } from 'src/app/models/relation';
import { RelationService } from 'src/app/services/relation.service';

@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.css']
})
export class RelationComponent implements OnInit {

  relation:Relation[]=[];
  filterText="";
  constructor(private relationService:RelationService,
   ) { }

  ngOnInit(): void {
    this.getRelations();
  }

  getRelations() {
    this.relationService.getRelations().subscribe(response=>{
      this.relation=response.data
      
    })
  }

}
