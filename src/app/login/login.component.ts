import { Component, OnInit } from '@angular/core';




export interface UserLoginDto{
  name: string;
  surname: string;
  patronymic?: string;
  email: string;
  password: string;
  passwordConfirm: string;
  BirthDate: '';
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: UserLoginDto={
  name:'',
  surname:'',
  email:'',
  patronymic:'',
  password: '',
  passwordConfirm:'',
  BirthDate: '',
}
  constructor() { }

  ngOnInit(): void { }
  onSubmit(){ const savedDataAboutUser ={
    email: this.user.email
  };
    const userStr = JSON.stringify(savedDataAboutUser);
    localStorage.setItem('user', userStr)
  }
}
