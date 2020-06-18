import { ProductComponent } from './product.component';

export abstract class Edibles extends ProductComponent {
    monthsBeforeExpiry:number;
    price:number;
    abstract showExpiryDate(prodName:string):number;
}
