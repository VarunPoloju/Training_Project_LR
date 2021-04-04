import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cookingoils',
  templateUrl: './cookingoils.component.html',
  styleUrls: ['./cookingoils.component.css']
})
export class CookingoilsComponent implements OnInit {
  cookingoilsarray=[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getcookingoils().subscribe(
      res=>{
         //  res["message"]
         this.cookingoilsarray = res["message"]
        //  console.log("iam dalspulses",this.riceproductsarray)
       
      
      },
      err=>{
        console.log("error from Cooking Oils",err)
      }
 
    )
  }

  }

