import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dry-fruits',
  templateUrl: './dry-fruits.component.html',
  styleUrls: ['./dry-fruits.component.css']
})
export class DryFruitsComponent implements OnInit {
  dryfruitsarray = [];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getdryfruits().subscribe(
      res=>{
         //  res["message"]
         this.dryfruitsarray = res["message"]
        //  console.log("iam dalspulses",this.riceproductsarray)
       
      
      },
      err=>{
        console.log("error from Dry fruits",err)
      }
 
    )
  }
  }


