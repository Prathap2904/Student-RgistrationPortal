import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  errorMsg ="";
  ngOnInit(): void {
    
  }
  constructor(private auth:AuthService,private route:Router){
    
  }
  login(){
    if(this.username.trim().length === 0){
      this.errorMsg = "Username is Required";
    }
    else if(this.password.trim().length === 0){
      this.errorMsg = "Password is Required";
    }
    else{
      this.errorMsg ="";
      let res = this.auth.login(this.username,this.password)
      if(res == 200){
        this.route.navigate(['home']);
      }
      else{
        this.errorMsg ="Invalid Credinals";
      }
    }
  }
}
