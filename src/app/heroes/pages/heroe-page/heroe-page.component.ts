import { Component } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';

@Component({
  selector: 'app-heroe-page',
  standalone: true,
  imports: [MatGridListModule, RouterModule, HeroImagePipe, MatButtonModule, MatCardModule,MatChipsModule, MatIconModule],
  templateUrl: './heroe-page.component.html',
  styles: ``
})
export class HeroePageComponent {
  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute){}

    ngOnInit(): void{
      //? 1. this.activateRoute.params con subscribe
      //? 2. CON EL PARAMETRO llamar a getHeroById
      this.activatedRoute.params
  .pipe(
    switchMap(({id}) => 
      this.heroesService.getHeroById(id).pipe(
        catchError(error => {
          console.error(error);
          return of(null); 
        })  
      )
    )
  )
  .subscribe(hero => {
    if (hero) {
      this.hero = hero;
    } else {
      console.log("Heroe no encontrado en la base de datos")
    }
  });
  }
}

