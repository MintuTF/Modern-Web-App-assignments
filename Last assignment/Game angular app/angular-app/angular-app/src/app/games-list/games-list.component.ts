import { Component, OnInit } from '@angular/core';

import { GamesDataService } from '../games-data.service';

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
  games: Game[] = [];

  constructor(private gamesDataService: GamesDataService) { }

  ngOnInit(): void {
    this.getGames();
    console.log(this.games);

  }

  public getGames(): void {
    this.gamesDataService.getGames().then(foundGames => this.games = foundGames);
  }

}
export class Game {
  _id!: string;
  title: string = "No title";
  price: number = 0.0;
  year: number = 0;
}