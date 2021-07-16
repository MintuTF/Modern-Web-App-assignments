
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Game } from '../games-list/games-list.component';


  export enum ActionTypes {
    Add = '[Game] Add to Store',
    Remove = '[Game] Remove from Store',
    LoadItems = '[Game] Load items from Store',
    LoadSuccess = '[Game] Load success'
  }

  export class addGameStore implements Action {
    readonly type = ActionTypes.Add;
  
    constructor(public payload: Game) {}
  }

  export class getGame implements Action {
    readonly type = ActionTypes.LoadItems;
  }

  export class removeGame implements Action {
    readonly type = ActionTypes.Remove;
  
    constructor(public payload: Game) {}
  }

  export class LoadItems implements Action {
    readonly type = ActionTypes.LoadSuccess;
  
    constructor(public payload: Game[]) {}
  }
  
  export type ActionsUnion = addGameStore | getGame | LoadItems | removeGame;    