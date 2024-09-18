// housing-location.component.ts
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../Interfaces/housing-location';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocationList!: HousingLocation;

  
  constructor() { }
}