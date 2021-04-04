import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dairyproducts',
  templateUrl: './dairyproducts.component.html',
  styleUrls: ['./dairyproducts.component.css']
})
export class DairyproductsComponent implements OnInit {
  dairyarray = [];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getDairyProducts().subscribe(
      res=>{
         //  res["message"]
         this.dairyarray = res["message"]
        //  console.log("iam dalspulses",this.riceproductsarray)
       
      
      },
      err=>{
        console.log("error from Dairy Products",err)
      }
 
    )
  }

}
