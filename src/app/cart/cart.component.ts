import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { CheckoutService } from '../checkout.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cart=[];
  
   sum:number=0;
   item;
   username:any;
   i:any;
  //  productprice:any;
  constructor(private cartservice:CartService,private router:Router,private userservice:UserService,private toaster:ToastrService,private chckout:CheckoutService) { 
    
  }

  ngOnInit(): void {
    //  this.cart=JSON.parse(localStorage.getItem("userCart"))
    this.username = localStorage.getItem("username")
    this.cartservice.getCartByUsername(this.username).subscribe(
      res=>{
        this.cart = res['userCart']
        console.log("from cart",this.cart)


        for(let i=0;i<this.cart.length;i++){
          this.sum = this.sum+this.cart[i].productprice
           console.log("from sum is",this.cart[i].productprice)
        }
        this.chckout.setSum(this.sum)
      },
      err=>{
        console.log("error in cart",err)
      }
    )
    console.log("cart",this.cart)
    // total price logic

    
  


    
  }

   deleteprodincart(item){
     this.sum = 0;
      console.log(item)
      let id = item.productid
      let cartObj = {"username":this.username,"id":id}
     //  console.log()
      this.userservice.deleteprodfromcart(cartObj).subscribe(
    
       res=>{
         if(res['message'] == "failed"){
           alert(res['reason'])
           localStorage.clear()
           //navigate to login
        //  this.router.navigateByUrl("/login")
         }
         else{
          //  this.cart.splice(item,1)
          this.cart = res['product']
          console.log(this.cart)
          for(let i of this.cart){
            this.sum = this.sum + i.productprice
          }
          this.chckout.setSum(this.sum)
           alert(res['message'])
          //  this.router.navigateByUrl(`/userdashboard/${this.username}`)
         }
       },
       err=>{
         alert("something went wrong")
         console.log(err)
       }
      )

    
   }

  // deleteCartItem(item){
  //   let quantity =1;
  //    this.userservice.removeCartItem(this.username,item.product.productid).subscribe((res)=>{
  //     if (res['message'] == 'Product deleted from the cart Successful') {
  //       this.toaster.success('Product deleted from the cart Successfully');

  //       let index = this.cart.findIndex((x) => x == item);
  //       quantity= this.cart[index].quantity;
  //       console.log(quantity)
  //       this.cart.splice(index, 1);


  //     }
  //     else{
  //       this.toaster.warning('Something went wrong');
  //       console.log(res['err']);
  //     }
  //     this.totalsum();
  //    });
  //    this.userservice.getCount(this.username).subscribe((res)=>{
  //      this.cartservice.setNum(res['message']);
  //    })


  // }
  // totalsum() {
  //   this.sum = 0;
  //   for (let x of this.cart) {
  //     this.sum += x.product.productprice * x.product.quantity;
  //   }
  // }

  
  minus(item:any){
    this.sum = 0;
     item.productprice=(item.productprice)/item.quantity
    //  console.log(item.product.productprice)
     if(item.quantity>1){
       item.quantity--;
       item.quantity=item.quantity;
       item.productprice=(item.quantity*item.productprice)
     }
     this.userservice.updatetotal(item).subscribe(
      res=>{
        if(res['message']="updated successfully"){
          this.toaster.success("updated success")
          this.cart = res['a']
          for(let i of this.cart){
            this.sum = this.sum + i.productprice
          }
          this.chckout.setSum(this.sum)
          console.log(this.sum)
        }
      },
      err=>{
        this.toaster.error("update failed")
      }
     );
  }

  plus(item:any){
    this.sum = 0;
    console.log("in plus",this.sum)
    item.productprice = (item.productprice)/item.quantity 
    // console.log("before updating price is",item.product.productprice)
      // item.quantity++;
       item.quantity = ++item.quantity;
      item.productprice = (item.quantity*item.productprice)
      // console.log("updated one",item.product.productprice)
      this.userservice.updatetotal(item).subscribe(
        res=>{
          if(res['message']="updated successfully"){
            this.toaster.success("updated success")
            this.cart = res['a']
            for(let i of this.cart){
              this.sum = this.sum + i.productprice
            }
            this.chckout.setSum(this.sum)
            console.log(this.sum)
          }
        },
        err=>{
          this.toaster.error("update failed")
        }
      )
      console.log("price and quantity is",item.productprice,item.quantity)
      //  console.log("adter updating price in console",item)
  }




  payment(){
    this.router.navigateByUrl("/payment")
  }


 

}
