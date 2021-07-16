import { Game } from '../games-list/games-list.component';
import { ActionsUnion, ActionTypes } from './action';
    
    export const initialState:Game = {
        _id: '',
        title:  "No title",
        price: 0.0,
        year:  0
      
    };

    export function gameReduce(state:Game[]=[initialState], action: ActionsUnion) {
        switch (action.type) {
          case ActionTypes.LoadSuccess:
            console.log("add one called")
            return [...state,
              action.payload
              ]

            case ActionTypes.Add:
                console.log("add two called")
          return [...state,
            action.payload
            ]
    
        // case ActionTypes.Remove:
        //   return {
        //     ...state,
        //     games: [...state.games.filter(game => game.name !== action.payload.name)]
        //   };
          default:
            return state;
        }
      }