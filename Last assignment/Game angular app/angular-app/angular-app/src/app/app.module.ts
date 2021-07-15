import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesDataService } from './games-data.service';
import { GamePageComponent } from './game-page/game-page.component';
import { OrderPipe } from './order.pipe';
import { HeaderDirective } from './header.directive';
import { HeaderComponent } from './header/header.component';
import { AddGameComponent } from './add-game/add-game.component';
import  {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GamesListComponent,
    GamePageComponent,
    OrderPipe,
    HeaderDirective,
    HeaderComponent,
    AddGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{
      path: "",
      component: WelcomeComponent
    },
    {
      path: "games",
      component: GamesListComponent
    },
    {
      path: "addgame",
      component: AddGameComponent
    },
    {
      path:"game/:gameId",
      component:GamePageComponent
    }, {
      path: "**",
      component: WelcomeComponent // error page
    }

    ])
  ],
  providers: [
    GamesDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
