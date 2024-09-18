// housing.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HousingLocation } from '../Interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private housingUrl = 'assets/house.json'; // The path to the JSON file

  constructor(private http: HttpClient) { }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.housingUrl);
  }

  getHousingLocationById(id: number): Observable<HousingLocation> {
    const url = `${this.housingUrl}/${id}`;
    return this.http.get<HousingLocation>(url);
  }
}