import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus:boolean=false;
  logStatus:boolean;
 usercredobj;
  $subs: Subscription;
 

  constructor(private us:UserService,private router:Router,private adminservice:AdminService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.$subs = this.us.receiveLoginState().subscribe(d=>{
      this.logStatus=d;
    })
  }

  LoggedIn(){
    return localStorage.getItem('token')
  }



  ngOnDestroy(){
    this.$subs.unsubscribe();
  }


logoutuser(){
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  this.logStatus = false;
  this.router.navigateByUrl("/home")
}





// -----------------------------logged in person as user------------------------------
  onSelect(ref){
    let usercredobj =  ref.value;
     console.log(usercredobj)
  
     if(usercredobj.person=="user")
     {
      this.us.loginUser(usercredobj).subscribe(
        res=>{
          console.log("response is",res)
          if(res["message"]=="success"){
             this.toaster.success("User login Successfull!!");
            // for token it is there normally so no need to change anyting about it
            localStorage.setItem("token",res["token"])
            // but when coming to user it is in the form of js object .we need to convert to string and then store it 
            // let userObj=JSON.stringify(res["user"])
             localStorage.setItem("username",res["username"])
  
          
            this.loginStatus = true;
            this.us.LoginStatusMethod(this.loginStatus)
            
            let username = localStorage.getItem("username")
            // console.log("username is",username)
              this.router.navigateByUrl(`/userdashboard/${username}`)
              ref.resetForm();
            
          }
          else{
            // alert(res["message"])
            this.toaster.error(res["message"])
            
          }
  
        },
        err=>{
          alert("Error occurred")
          console.log(err)
        }
  
      )
     }
  
    //  --------------------------------------------------------------------------ADMIN--------------------------------
    //  for admin
  if(usercredobj.person=="admin" && usercredobj.password=="admin")
  {
  this.adminservice.adminLogin(usercredobj).subscribe(
    res=>{
      localStorage.setItem("token",res["token"])
      localStorage.setItem("admin",res["username"])
       this.router.navigateByUrl("/admin")
       ref.resetForm();
    },
    err=>{
      alert("Error occurred")
      console.log(err)
    }
  )
  }
    }
  
  

}
