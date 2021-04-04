import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-othergrocery',
  templateUrl: './othergrocery.component.html',
  styleUrls: ['./othergrocery.component.css']
})
export class OthergroceryComponent implements OnInit {
  othersarray=[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {

    this.userservice.getothersarray().subscribe(
      res=>{
         //  res["message"]
         this.othersarray = res["message"]
        //  console.log("iam dalspulses",this.riceproductsarray)
       
      
      },
      err=>{
        console.log("error from Others array",err)
      }
 
    )
    
  }

}
