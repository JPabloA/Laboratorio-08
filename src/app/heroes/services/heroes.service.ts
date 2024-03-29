import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/heroes.interfaces';
import { environments } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http:HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(error => of(undefined))
    )
  }
}
