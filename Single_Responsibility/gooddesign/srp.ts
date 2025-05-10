import {Order,Product} from './order'
import { PaymentProcessor } from './paymentsprocessor';
import { InvoiceProcessor } from './invoiceprocessor';
import { PriceCalculator } from './priceCalculator';
 const product1 = new Product("chappal","1",1000)
 const product2 = new Product("belt","2",500)

 const order = new Order();

 order.addProduct(product1);
 order.addProduct(product2);
 
const totalAmount = new PriceCalculator().getTotal(order.products);

 const paymentProcessor = new PaymentProcessor();
 paymentProcessor.paymentInfo(order.products);

 const invoice = new InvoiceProcessor();
 invoice.generateInvoice(order.products,totalAmount)