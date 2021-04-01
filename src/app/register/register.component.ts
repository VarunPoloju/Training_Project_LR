import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  $subs: Subscription;
  logStatus:boolean;


  constructor(private us:UserService,private router:Router) { }

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

  


  onSubmit(formRef){
    let userobj = formRef.value;
    // console.log(userobj)
    this.us.createUser(userobj).subscribe(
      res=>{
        if(res["message"]=="user created"){
          alert("User registration success")
           this.router.navigateByUrl("/login")
          formRef.resetForm();
        }
        if(res["message"]=="user existed"){
          alert("Username "+userobj.username+ " is already existed.Please choose another")
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
