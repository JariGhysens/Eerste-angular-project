import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../../Interfaces/housing-location';
import { HousingService } from '../../Service/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.getHousingLocations();
  }

  getHousingLocations(): void {
    this.housingService.getAllHousingLocations() 
      .subscribe(locations => this.housingLocationList = locations);
  }
}
