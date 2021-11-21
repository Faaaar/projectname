import { Component, OnInit } from '@angular/core';


export interface UserRegisterDto{
  name: string;
  surname: string;
  patronymic?: string;
  email: string;
  password: string;
  passwordConfirm: string;
  BirthDate: string;
  gender: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: UserRegisterDto={
  name:'',
  surname:'',
  email:'',
  patronymic:'',
  password: '',
  passwordConfirm:'',
  BirthDate: '',
  gender: ''
}
  constructor() { }
  logout (){}
  ngOnInit(): void { }
  onSubmit(){
    console.log(this.user);
  }
}
