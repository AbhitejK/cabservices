import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RidepageService {

  public cartItemList : any =[]

  constructor() { }


  bookRide(product : any){
    this.cartItemList.push(product);
    console.log(this.cartItemList)
    alert("Ride booked");
  }

  getRides(){
    return this.cartItemList
  }

  deleteride(){
    this.cartItemList = []
  }

}
