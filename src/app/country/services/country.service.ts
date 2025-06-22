import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RESTCountry } from '../interfaces/res-country.interfaces';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.interface';

const API_URL = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  private queryCacheByCapital = new Map<string, Country[]>();
  private queryCacheByCountry = new Map<string, Country[]>();
  private queryCacheByRegion = new Map<string, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    const sanitizedQuery = query.toLowerCase();

    if (this.queryCacheByCapital.has(query)) {
      return of(this.queryCacheByCapital.get(query) ?? []);
    }

    return this.http
      .get<RESTCountry[]>(`${API_URL}/capital/${sanitizedQuery}`)
      .pipe(
        map(CountryMapper.mapRestCountries),
        tap((countries) => this.queryCacheByCapital.set(query, countries)),
        catchError((error) => {
          return throwError(
            () =>
              new Error(
                `No fue posible obtener países con ese query ${query || error}`
              )
          );
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const sanitizedQuery = query.toLowerCase();
    if (this.queryCacheByCountry.has(query)) {
      return of(this.queryCacheByCountry.get(query) ?? []).pipe(delay(2000));
    }
    return this.http
      .get<RESTCountry[]>(`${API_URL}/name/${sanitizedQuery}`)
      .pipe(
        map(CountryMapper.mapRestCountries),
        tap((countries) => this.queryCacheByCountry.set(query, countries)),
        catchError((error) => {
          return throwError(
            () =>
              new Error(`No se pudo obtener países: ${error.message || error}`)
          );
        })
      );
  }

  searchByAlphaCode(query: string): Observable<Country | null> {
    const sanitizedQuery = query.toLowerCase();
    const url: string = `${API_URL}/alpha/${sanitizedQuery}`;
    return this.http.get<RESTCountry[]>(url).pipe(
      map(CountryMapper.mapRestCountries),
      map((countries) => countries.at(0) ?? null),
      catchError((error) => {
        return throwError(
          () =>
            new Error(`No se pudo obtener países: ${error.message || error}`)
        );
      })
    );
  }

  searchByRegion(query: string) {
    const url = `${API_URL}/region/${query.toLowerCase()}`;
    if (this.queryCacheByRegion.has(query)) {
      return of(this.queryCacheByRegion.get(query) ?? []);
    }
    return this.http.get<RESTCountry[]>(url).pipe(
      map(CountryMapper.mapRestCountries),
      tap((countries) => this.queryCacheByRegion.set(query, countries)),
      catchError((err) => {
        return throwError(
          () => new Error(`No se pudo obtener países: ${err.message || err}`)
        );
      })
    );
  }
}
