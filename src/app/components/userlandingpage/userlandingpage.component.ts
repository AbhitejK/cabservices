import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RidepageService } from 'src/app/services/ridepage.service';

@Component({
  selector: 'app-userlandingpage',
  templateUrl: './userlandingpage.component.html',
  styleUrls: ['./userlandingpage.component.css']
})
export class UserlandingpageComponent implements OnInit {


  cabList=[{
    id: 1,
    DriverName: "Venkenkatesh",
    DriverContact: 6969696969,
    Price: 500,
    Route:"Miyapur-Secunderabad",
    Image:"assets/car1.png"
  },{
    id: 2,
    DriverName: "GVV",
    DriverContact: 6969667369,
    Price: 700,
    Route:"Hitech city-Secunderabad",
    Image:"assets/Car2.png"
  },{
    id: 3,
    DriverName: "Avinash Eranki",
    DriverContact: 6963457969,
    Price: 900,
    Route:"Gacchibowli-Secunderabad",
    Image:"assets/car3.png"
  }]


  constructor(public router: Router,public rideservice: RidepageService) { }

  ngOnInit(): void {
    const loginstatus = localStorage.getItem('login')
    if(loginstatus==='false'){
      this.router.navigateByUrl('/login')
    }
  }

  bookride(cab: any){
    this.rideservice.bookRide(cab)
  }

  toridepage(){
    this.router.navigateByUrl('/ridepage')
  }

  toprofilepage(){
    this.router.navigateByUrl('/profilepage')
  }

}
