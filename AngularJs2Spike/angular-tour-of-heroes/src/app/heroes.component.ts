import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  template: `   
    <h2>My Heroes</h2>
    <div>
      <label>Hero name:</label> <input #heroName />
      <button (click)="add(heroName.value); heroName.value=''">
        Add
      </button>
    </div>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
      [class.selected]="hero==selectedHero"
      (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span>
        <span>{{hero.name}}</span>
        <button class="delete" (click)="delete(hero); $event.stopPropagation()">x</button>
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name | uppercase}} is my hero</h2>
      <button (click)="gotoDetail()">View Details</button>
    </div>
    `,
  styleUrls:['heroes.component.css']
})

export class HeroesComponent implements OnInit  { 
  heroes:Hero[];
  selectedHero:Hero;

  constructor(
    private router:Router,
    private heroService:HeroService
    )
  {
  }

  getHeroes():void{
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

  ngOnInit():void{
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
}


