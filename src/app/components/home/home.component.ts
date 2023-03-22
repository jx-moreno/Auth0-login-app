import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService, private route :Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$
    .subscribe(isAuthenticated =>{
      if (isAuthenticated) {
        this.route.navigate(['/dashboard']);
      }
    })
  }

  login(){
    this.auth.loginWithRedirect();
  }

}
