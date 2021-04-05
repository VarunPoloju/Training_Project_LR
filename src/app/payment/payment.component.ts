import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cart=[];
  sum:number=0;
  constructor() { }

  ngOnInit(): void {
    this.cart=JSON.parse(localStorage.getItem("userCart"))
     
    console.log("cart",this.cart)

    for(let i=0;i<this.cart.length;i++){
      this.sum = this.sum+this.cart[i].product.productprice

      
      console.log("from sum is",this.sum)
    }
  }

}
