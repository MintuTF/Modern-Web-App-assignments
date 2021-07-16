import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesDataService } from '../games-data.service';
import { Router } from '@angular/router';

import { Game } from '../games-list/games-list.component';
import { Observable } from 'rxjs';
import { gameReduce } from '../state-managment/reducer';
import { Store } from '@ngrx/store';

import { Appstate } from '../state-managment/state';
import { addGameStore, removeGame ,ActionTypes} from '../state-managment/action';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  title!: string;
  price!: number;
  rate!: number;
  year!: number;
  minPlayers!: number;
  maxPlayers!: number;
  minAge!: number;

  games!:Observable<Game[]>;

  constructor(private GamesDataService: GamesDataService, 
    private route: ActivatedRoute,private router:Router,private store: Store<Appstate>) { }

ngOnInit(): void {
   

}

public addGame(data:any){
  console.log(data);
  this.GamesDataService.addGame(data)
      .then(response => this.addedGame(response))
      .catch(this.handleError);
}

private addedGame(game: Game) {

  this.store.dispatch(
   { type:ActionTypes.Add,
   payload:game

   } 
  )

  

  

  this.router.navigate(['/games']);
  console.log("Game added ");
  console.log(game);
}

private handleError(error: any) {
  console.log("Error " + error)
}
}
