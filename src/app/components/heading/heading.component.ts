import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  
  menuItems=[
    {linkId:1,linkName:"Genel Bilgiler",linkUrl:'headings'},
    {linkId:2,linkName:"Kimlik Detay",linkUrl:'identities'},
    {linkId:3,linkName:"Adres",linkUrl:'addresses'},
    {linkId:4,linkName:"İletişim Bilgileri",linkUrl:'contacts'},
    {linkId:5,linkName:"Mesleki Bilgiler",linkUrl:'jobs'}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}



