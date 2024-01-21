import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Hero } from '../../interfaces/heroes.interfaces';


@Component({
  selector: 'hero-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroImagePipe,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './card.component.html',
  styles: `
    .spacer {
          flex: 1 1 auto;
        }
  `
})
export class CardComponent {

  @Input()
  public hero!: Hero;

  ngOnInit(): void{
    if (!this.hero) throw Error("Heroe es requerido!")
  }
  

}
