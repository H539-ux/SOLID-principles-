


// class Product{
//     name:string
//     id:string 
//     price:number

//     constructor(name:string , id:string , price:number){
//       this.name = name;
//       this.id = id;
//       this.price = price
//     }
// }

// /* bad design as this does not follow SRP order have lot of responsibility if we need to change the 
//  payment type(in future we might add integrations ) we are changing order so violation of class should have one reason to change 
// */
// class Order {
//   products :Product[]=[];

//   addProduct(product:Product){
//       this.products.push(product);
//   }
//   getProduts():Product[]{
//     return this.products;
//   }

//   removeProduct(id:string){
//         this.products = this.products.filter((product)=>product.id === id);
//   }
  
//   totalPrice():Number{
//     return this.products.reduce((total,product)=> total=total+product.price ,0);
//   }

//   payment(){
//     console.log("payment done successfully")
//   }

//   generateInvoice(){
//     this.products.forEach((product)=>{
//         console.log('product :', product.name);
//     })
//     console.log('total price ' , this.totalPrice())
//   }
// }

//  const product1 = new Product("chappal","1",1000)
//  const product2 = new Product("belt","2",500)

//  const order = new Order();
//  order.addProduct(product1);
//  order.addProduct(product2)

//  order.generateInvoice()