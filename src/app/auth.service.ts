import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(uname:string,password:string){
    if(uname === 'Admin' && password === 'admin@123'){
      return 200;
    }
    else{
      return 400n
    }
  }
}
