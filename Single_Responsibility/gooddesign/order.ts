export class Product{
    name:string
    id:string 
    price:number

    constructor(name:string , id:string , price:number){
      this.name = name;
      this.id = id;
      this.price = price
    }
}



export class Order {
  products :Product[]=[];

  addProduct(product:Product){
      this.products.push(product);
  }
  getProduts():Product[]{
    return this.products;
  }

  removeProduct(id:string){
        this.products = this.products.filter((product)=>product.id === id);
  }
  
}