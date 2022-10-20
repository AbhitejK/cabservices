import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RidepageService } from 'src/app/services/ridepage.service';

@Component({
  selector: 'app-ridepage',
  templateUrl: './ridepage.component.html',
  styleUrls: ['./ridepage.component.css']
})
export class RidepageComponent implements OnInit {


  public ride : any =[]
  constructor(public rideservice: RidepageService,private router: Router) { }

  ngOnInit(): void {
    const loginstatus = localStorage.getItem('login')
    if(loginstatus==='false'){
      this.router.navigateByUrl('/login')
    }
    this.ride = this.rideservice.getRides();
  }


  deleteride(){
    this.rideservice.deleteride();
    this.ride=[]
  }

  toridepage(){
    this.router.navigateByUrl('/ridepage')
  }

  toprofilepage(){
    this.router.navigateByUrl('/profilepage')
  }

}
