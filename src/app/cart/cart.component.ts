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
  constructor(private cartservice:CartService,private userservice:UserService,private toaster:ToastrService) { 
  }

  ngOnInit(): void {
     this.cart=JSON.parse(localStorage.getItem("userCart"))
   
    console.log("cart",this.cart)
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
