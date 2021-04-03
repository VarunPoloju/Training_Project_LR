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
  dalsarray=[];
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    console.log("hii iam dals")
    this.userservice.getdals().subscribe(
      res=>{
         //  res["message"]
         this.dalsarray = res["message"]
         console.log("iam dalspulses",this.dalsarray)
       
      
      },
      err=>{
        console.log("error from dals pulses",err)
      }
 
    )
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


