import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { reviewsListComponent } from './review-list/review-list.component';
import { reviewsDataService } from './review-data.service'
import { reviewPageComponent } from './review-page/review-page.component'
import { OrderPipe } from './order.pipe';
import { HeaderDirective } from './header.directive';
import { HeaderComponent } from './header/header.component';
import { AddreviewComponent } from './add-review/add-review.component';
import  {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    reviewsListComponent,
    reviewPageComponent,
    OrderPipe,
    HeaderDirective,
    HeaderComponent,
    AddreviewComponent
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
      path: "reviews",
      component: reviewsListComponent
    },
    {
      path: "addreview",
      component: AddreviewComponent
    },
    {
      path:"review/:reviewId",
      component:reviewPageComponent
    }, {
      path: "**",
      component: WelcomeComponent // error page
    }

    ])
  ],
  providers: [
    reviewsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
