import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm! : FormGroup;
  loginFormSubmit = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ){}

 ngOnInit(){
   this.loginForm = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required],
   });
  }
  onSubmit(): void{
    this.loginFormSubmit = true;
    console.log(this.loginForm.value);   
    if(this.loginForm.valid)
    {
    //save login info in Localstorage
    localStorage.setItem('authData', JSON.stringify(this.loginForm.value));
    //send update login info to authservice
    this.authService.checkUserState();
     // Route to home page
     this.router.navigate(['']);   
    }
    // else{
    //  alert('Please fill out this form!');
    // }
  }
}
