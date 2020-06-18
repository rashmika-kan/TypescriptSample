import { Injectable } from '@angular/core';
import {MobileColour} from 'src/app/product/mobile-colour.enum'

@Injectable({
  providedIn: 'root'
})
export class MobileServiceService {
   availableMobile:any=[{prodName:'Black',stock:false,prodId:1001,categoryName:'Electronics',warranty:2}];

  constructor() { 
    this.availableMobile.push({prodName:'Grey',stock:true,prodId:1002,categoryName:'Electronics',warranty:1},{prodName:'Blue',stock:true,prodId:1003,categoryName:'Electronics',warranty:2});
  }

  getAvailableMobiles():[string,boolean]{
    return this.availableMobile;
  }

}
