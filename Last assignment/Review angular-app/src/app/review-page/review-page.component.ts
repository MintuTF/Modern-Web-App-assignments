import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { review } from '../review-list/review-list.component';
import { reviewsDataService } from '../review-data.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class reviewPageComponent implements OnInit {

  review: review = {} as review;


  constructor(private reviewsDataService: reviewsDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const reviewId: string = this.route.snapshot.params.reviewId;
    this.getreview(reviewId);
  }

  private getreview(reviewId: string): void {
    this.reviewsDataService.getreview(reviewId)
      .then((response) => this.recivedreview(response))
      .catch(this.handleError);
  }
  private recivedreview(review: review) {
    this.review = review;
  }

  public deletereview(id:string){
    this.reviewsDataService.deleteOnereview(id)
    .then((response) => this.recivedreview(response))
    .catch(this.handleError);

  }


  private handleError(err: any) {
    console.log("Error:", err);

  }

}
