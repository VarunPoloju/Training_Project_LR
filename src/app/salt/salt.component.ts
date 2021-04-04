import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-salt',
  templateUrl: './salt.component.html',
  styleUrls: ['./salt.component.css']
})
export class SaltComponent implements OnInit {
  saltarray=[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getsaltsSugars().subscribe(
      res=>{
         //  res["message"]
         this.saltarray = res["message"]
        //  console.log("iam dalspulses",this.riceproductsarray)
       
      
      },
      err=>{
        console.log("error from Salts and Sugars Products",err)
      }
 
    )

  }

}
