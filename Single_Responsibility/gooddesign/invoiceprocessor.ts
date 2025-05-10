import { Product } from "./order";
export class InvoiceProcessor {
  generateInvoice(products:Product[],amount:Number){
    products.forEach((product)=>{
        console.log('product :', product.name);
    })
    console.log('total price ' , amount)
  }
  
}