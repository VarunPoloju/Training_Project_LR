import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {


  username:String;
  userCartSize;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  //  this.username = JSON.parse( localStorage.getItem("username"))["username"]
  this.username = localStorage.getItem("username")
   console.log("hello",this.username)
   this.cartStatus();
  }
  
  cartStatus(){
    //  this.username=JSON.parse(localStorage.getItem("user"))["username"]

    // this.username=JSON.parse(localStorage.getItem("username"))["username"]---changed this
     this.username = localStorage.getItem("username")

    // this.username=localStorage.getItem("username")["username"]

    this.userService.getInitialCartSize( this.username).subscribe(
      
      res=>{

        this.userService.setCartSubjectSize(res["cartsize"])
        this.userCartSize=res["cartsize"]

      this.userService.getCartSubjectSize().subscribe(c=>{
        this.userCartSize=c;
      })
    
      //  localStorage.setItem("cartsize",this.userCartSize)
       
       localStorage.setItem("userCart",JSON.stringify(res["userCart"]))
      },
      err=>{
        alert("Error occurred")
        console.log(err)
      }
    )
  }



  userLogout(){
    this.userService.logoutUser();
  }
  
  showUserCart(){
    this.router.navigateByUrl('/cart')
  }


}
