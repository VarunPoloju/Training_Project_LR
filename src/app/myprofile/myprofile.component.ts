import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }
username : any;
userfromBackend;
 
  ngOnInit(): void {
    this.username=localStorage.getItem("username")
    this.us.getProfileDetails(this.username).subscribe(
      res=>{
        if(res["message"]=="failed")
        {
          alert(res["reason"])
          this.router.navigateByUrl("/home")
        }
        else{
          this.userfromBackend =  res["message"];
        }
    
    //  console.log("user from backend is",this.userfromBackend)
     
      },
      err=>{
       alert("Error occured in fetchin Profile details")
       console.log(err)

      }
    )

  }
  
  

}
