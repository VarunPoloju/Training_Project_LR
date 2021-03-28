import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {
  @ViewChild('closebutton') closebutton;
 usercredobj;

  constructor(private us:UserService ,private router:Router,private adminservice:AdminService) { }

  ngOnInit(): void {
  }

// -----------------------login--------------------------
  onSelect(ref){
  let usercredobj =  ref.value;
   console.log(usercredobj)

   if(usercredobj.person=="user")
   {
    this.us.loginUser(usercredobj).subscribe(
      res=>{
        console.log("response is",res)
        if(res["message"]=="success"){
          // for token it is there normally so no need to change anyting about it
          localStorage.setItem("token",res["token"])
          // but when coming to user it is in the form of js object .we need to convert to string and then store it 
          // let userObj=JSON.stringify(res["user"])
           localStorage.setItem("username",res["username"])
          //  JSON.parse(localStorage.getItem("user"))["username"]
          let username = localStorage.getItem("username")
          // console.log("username is",username)
            this.router.navigateByUrl(`/userdashboard/${username}`)
            ref.resetForm();
          
        }
        else{
          alert(res["message"])
          
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
if(usercredobj.person=="admin")
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

onSave()
{
if(this.usercredobj.value == "valid")
{
 this.router.navigateByUrl('/home')
}
}





//------------------------- register---------------------
  onSubmit(formRef){
    let userobj = formRef.value;
    // console.log(userobj)
    this.us.createUser(userobj).subscribe(
      res=>{
        if(res["message"]=="user created"){
          alert("User registration success")
          // this.router.navigateByUrl("/login")
          formRef.resetForm();
        }
        if(res["message"]=="user existed"){
          alert("Username "+userobj.name+ " is already existed.Please choose another")
           formRef.resetForm();
        }
      },
      err=>{
        alert("something went wrong!!")
        console.log(err)
      }
    )


  }





}

