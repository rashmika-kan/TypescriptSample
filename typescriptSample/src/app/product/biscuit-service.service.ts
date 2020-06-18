import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiscuitServiceService {
availableBiscuit:any=[{prodName:'Butter Cookies',prodId:2001,cost:150,quantity:40,categoryName:'Edibles',monthsBeforeExpiry:6}]
  constructor() { 
    this.availableBiscuit.push({prodName:'Dark Fantasy',prodId:2002,cost:250,quantity:100,categoryName:'Edibles',monthsBeforeExpiry:10},{prodName:'Tim Tam',prodId:2003,cost:100,quantity:60,categoryName:'Edibles',monthsBeforeExpiry:3})
  }
  getAvailableBiscuits():any{
    return this.availableBiscuit;
  }
}
