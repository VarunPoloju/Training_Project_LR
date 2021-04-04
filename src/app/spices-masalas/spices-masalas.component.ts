import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-spices-masalas',
  templateUrl: './spices-masalas.component.html',
  styleUrls: ['./spices-masalas.component.css']
})
export class SpicesMasalasComponent implements OnInit {
  spicesarray=[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {

    this.userservice.getspicesmasala().subscribe(
      res=>{
         //  res["message"]
         this.spicesarray = res["message"]
        //  console.log("iam dalspulses",this.riceproductsarray)
       
      
      },
      err=>{
        console.log("error from Spices and masalas",err)
      }
 
    )
  }

}
