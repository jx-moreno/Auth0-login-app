import { NgModule } from '@angular/core';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // Import the module into the application, with configuration
     AuthModule.forRoot({
      domain: 'dev-i6ukuuc86mc2rtdo.us.auth0.com',
      clientId: 'X6IASCtmM8APsFpketBOHhD7ZpiIXfxb',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
