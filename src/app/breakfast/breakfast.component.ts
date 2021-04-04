import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfastarray=[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getbreakfast().subscribe(
      res=>{
         //  res["message"]
         this.breakfastarray = res["message"]
        //  console.log("iam dalspulses",this.riceproductsarray)
       
      
      },
      err=>{
        console.log("error from breakfast and Cereals",err)
      }
 
    )
  }

}
