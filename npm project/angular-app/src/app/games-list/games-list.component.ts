import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Appstate } from '../state-managment/state';
import { GamesDataService } from '../games-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})

export class GamesListComponent implements OnInit {
  title: string = "Mean Games";
  // game1 = {
  //   title: "My first Game",
  //   price: 14.99,
  //   year: 2010
  // };
  // game2 = {
  //   title: "My Second Game",
  //   price: 14.99,
  //   year: 2010
  // };
  // games = [this.game1, this.game2];


 // games: Game[] = [];
  games!:Observable<Game[]>;
  constructor(private gamesDataService: GamesDataService,private store:Store<Appstate>) { }

  ngOnInit(): void {
    this.getGames();
    
    
  }

  public getGames(): void {
    this.games=this.store.select("gameState")
    console.log(this.games)
   // this.gamesDataService.getGames().then(foundGames => this.games = foundGames);
  }

}
export class Game {
  _id!: string;
  title: string = "No title";
  price: number = 0.0;
  year: number = 0;
}