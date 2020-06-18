import { Component, OnInit } from '@angular/core';
import { BiscuitServiceService } from '../biscuit-service.service';
import { Edibles } from '../edibles';

@Component({
  selector: 'app-biscuit',
  templateUrl: './biscuit.component.html',
  styleUrls: ['./biscuit.component.css']
})
export class BiscuitComponent extends Edibles{
  prodName:string;

  constructor(private biscuitService:BiscuitServiceService) {
    super();
  }
  getBiscuitPrice(name:string,quantity:number):number{
    let availableBiscuits=this.biscuitService.getAvailableBiscuits();
    for(const item of availableBiscuits){
      if(item.prodName==name){
        this.productName=name;
        this.cost=item.cost;
        this.quantity=quantity;
        this.price=super.calculatePrice();  }}
    return this.price;
  }
  showExpiryDate(prodName:string):number{
    let availableBiscuits=this.biscuitService.getAvailableBiscuits();
    for(const item of availableBiscuits){
      if(item.prodName==prodName){
        this.prodName=prodName;
        this.monthsBeforeExpiry=item.monthsBeforeExpiry;
          }}
    return this.monthsBeforeExpiry;

  }
  
}
