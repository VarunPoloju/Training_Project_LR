import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cart=[];
   sum:number=0;
  //  productprice:any;
  constructor(private cartservice:CartService,private userservice:UserService,private toaster:ToastrService) { 
    
  }

  ngOnInit(): void {
     this.cart=JSON.parse(localStorage.getItem("userCart"))
     
    console.log("cart",this.cart)
    

    // total price logic
    for(let i=0;i<this.cart.length;i++){
      this.sum = this.sum+this.cart[i].product.productprice

      
      console.log("from sum is",this.sum)
    }
  }



  deleteprodincart(item){
    // console.log(item)
    this.userservice.deleteprodfromcart(item).subscribe(
      res=>{
        if(res["message"]){
          this.toaster.success("Product removed successfully from cart")
        }
      },
      err=>{
        this.toaster.error("something went wrong")
        console.log(err)
      }
    )
  }



 

}
