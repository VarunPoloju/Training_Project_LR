import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cart=[];
  sum:number=0;
  constructor(private chckout:CheckoutService) { }

  ngOnInit(): void {
    this.sum = this.chckout.getSum()
    console.log(this.sum)
     
   
   
  }


  onSubmit(formRef){

  }
}
