import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 isLoggedIn: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}
   
  ngOnInit(){
    this.authService.userState.subscribe(userData =>{
      this.isLoggedIn = this.authService.isLoggedIn();
    })
  
  }
  onLogout(){
  localStorage.removeItem('authData');
   // Route to login page 
  this.router.navigate(['login']);
  this.authService.checkUserState();
  }
}
