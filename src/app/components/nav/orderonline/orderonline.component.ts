import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderonline',
  templateUrl: './orderonline.component.html',
  styleUrls: ['./orderonline.component.css']
})
export class OrderonlineComponent implements OnInit {
  title="Order Online";
  message="";
  isRegist=false;
  firstName=""; lastName="";

  constructor() { }

  ngOnInit(): void { }

  userReg(){
    this.isRegist=true;

    this.message="User is registered successfully";
  }

}
