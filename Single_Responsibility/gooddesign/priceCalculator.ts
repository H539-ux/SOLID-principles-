 import { Product } from "./order";

export class PriceCalculator{

   getTotal(products:Product[]):Number{
    return  products.reduce((total,product)=> total=total+product.price,0);
   }
}