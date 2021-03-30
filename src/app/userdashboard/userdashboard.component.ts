import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {


  username:String;
  constructor(private us:UserService) { }

  ngOnInit(): void {
   this.username =  localStorage.getItem("username")
   console.log("hello",this.username)
  }
  

  userLogout(){
    this.us.logoutUser();
  }


}
