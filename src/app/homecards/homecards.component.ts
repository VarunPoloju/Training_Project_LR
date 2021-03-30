import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.css']
})
export class HomecardsComponent implements OnInit {
  products=[];
  constructor(private adminservice:AdminService,private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.adminservice.getProducts().subscribe(
      res=>{
        if(res["message"]=="nonempty"){
        this.products=res["products"]
        console.log(this.products)
        }
      },
      err=>{
        alert("error occurred")
        console.log(err)
      }
    )
  }

  

}
