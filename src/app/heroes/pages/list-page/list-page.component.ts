import { Component } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { CardComponent } from "../../components/card/card.component";
import { MatDividerModule } from "@angular/material/divider";

@Component({
    selector: 'app-list-page',
    standalone: true,
    templateUrl: './list-page.component.html',
    styles: ``,
    imports: [CardComponent, MatDividerModule]
})
export class ListPageComponent {
  public heroes: Hero[] = [];

  constructor(private heroeService: HeroesService) {}

  ngOnInit(): void {
    this.heroeService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes);
  }
}
