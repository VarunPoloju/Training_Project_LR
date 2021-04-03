import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-rice-products',
  templateUrl: './rice-products.component.html',
  styleUrls: ['./rice-products.component.css']
})
export class RiceProductsComponent implements OnInit {
  riceproductsarray=[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getriceproducts().subscribe(
      res=>{
         //  res["message"]
         this.riceproductsarray = res["message"]
        //  console.log("iam dalspulses",this.riceproductsarray)
       
      
      },
      err=>{
        console.log("error from rice products",err)
      }
 
    )
  }

}
