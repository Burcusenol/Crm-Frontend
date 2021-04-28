import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactUpdate } from 'src/app/models/contactUpdate';
import { ContactupdateService } from 'src/app/services/contactupdate.service';

@Component({
  selector: 'app-contactupdate',
  templateUrl: './contactupdate.component.html',
  styleUrls: ['./contactupdate.component.css']
})
export class ContactupdateComponent implements OnInit {

  contactUpdates:ContactUpdate[]=[];
  filterText="";
  constructor(private contactupdateService:ContactupdateService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getContactUpdate();
  }

  getContactUpdate() {
    this.contactupdateService.getContactUpdate().subscribe(response=>{
      this.contactUpdates=response.data
     
    })
  }


}
