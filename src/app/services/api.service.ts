import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Country } from '../types/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get<Country[]>(`${this.BASE_URL}/all`);
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.BASE_URL}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountriesByCodes(codes: string[]) {
    console.log(`${this.BASE_URL}/alhpa?codes=${codes.join(';')}`);
    return this.http.get<Country[]>(
      `${this.BASE_URL}/alpha?codes=${codes.join(';')}`
    );
  }
}
