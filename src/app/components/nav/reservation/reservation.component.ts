import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  title="Order Online";
  message="";
  isRegist=false;
  party=""; date=""; time="";

  constructor() { }

  ngOnInit(): void { }

  userReg(){
    this.isRegist=true;

    this.message="Reservation is booked for:";
  }
}
