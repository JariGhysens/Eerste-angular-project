import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule and Routes
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HousingLocationComponent } from './Components/housing-location/housing-location.component';
import routes from './routes'; // Import the routes
import { DetailsComponent } from './Components/details/details.component';
import { HousingService } from './Service/housing.service';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HousingLocationComponent,
    DetailsComponent, 
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,
    
    
    RouterModule.forRoot(routes) // Configure RouterModule with routes
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent, HousingLocationComponent,  HousingService]
})
export class AppModule { }
