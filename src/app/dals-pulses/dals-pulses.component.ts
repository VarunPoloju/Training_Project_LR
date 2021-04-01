import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dals-pulses',
  templateUrl: './dals-pulses.component.html',
  styleUrls: ['./dals-pulses.component.css']
})
export class DalsPulsesComponent implements OnInit {
  products=[];
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {

  //   this.userservice.getdals().subscribe(
  //     res=>{

  //     },
  //     err=>{
  //       console.log(err)

  //     }
  //   )


   }


  // gotoViewProduct(productid){
  //   this.router.navigateByUrl(`/viewproduct/${productid}`)
  //     }

    //   addToCart(product){
    //     // alert();
    //  //   this.toaster.error("Please login to Proceed With your order")
    //    // this.router.navigateByUrl("/login")
    
    //   }

}


