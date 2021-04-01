import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.css']
})
export class HomecardsComponent implements OnInit {
  products=[];
  constructor(private adminservice:AdminService,private toaster:ToastrService,private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    // this.adminservice.getProducts().subscribe(
    //   res=>{
    //     if(res["message"]=="nonempty"){
    //     this.products=res["products"]
    //     console.log(this.products)
    //     }
    //   },
    //   err=>{
    //     alert("error occurred")
    //     console.log(err)
    //   }
    // )

      this.adminservice.getproduct().subscribe(
        res=>{
          this.products=res["message"];
          return this.products;
        },
        err=>{
          console.log(err)
        }
      )


  }

  
  gotoViewProduct(productid){
this.router.navigateByUrl(`/viewproduct/${productid}`)
  }
  addToCart(product){
    // alert();
    this.toaster.error("Please login to Proceed With your order")
    this.router.navigateByUrl("/login")

  }
  

}
