import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-flours-grains',
  templateUrl: './flours-grains.component.html',
  styleUrls: ['./flours-grains.component.css']
})
export class FloursGrainsComponent implements OnInit {
  floursgrainsarray=[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getfloursgrains().subscribe(
      res=>{
         //  res["message"]
         this.floursgrainsarray = res["message"]
        //  console.log("iam flours-grains",this.floursgrainsarray)
       
      
      },
      err=>{
        console.log("error from flours-grains",err)
      }
 
    )

  }

}
