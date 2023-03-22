import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

constructor(public auth: AuthService){}


  ngOnInit(): void {
   
  }

  logout(){
    this.auth.logout();
  }

}
