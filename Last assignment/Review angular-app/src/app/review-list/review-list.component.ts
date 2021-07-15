import { Component, OnInit } from '@angular/core';

import { reviewsDataService } from '../review-data.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})

export class reviewsListComponent implements OnInit {
  title: string = "Mean reviews";
  // review1 = {
  //   title: "My first review",
  //   price: 14.99,
  //   year: 2010
  // };
  // review2 = {
  //   title: "My Second review",
  //   price: 14.99,
  //   year: 2010
  // };
  // reviews = [this.review1, this.review2];
  reviews: review[] = [];

  constructor(private reviewsDataService: reviewsDataService) { }

  ngOnInit(): void {
    this.getreviews();
    console.log(this.reviews);

  }

  public getreviews(): void {
    this.reviewsDataService.getreviews().then(foundreviews => this.reviews = foundreviews);
  }

}
export class review {
  _id!: string;
  title: string = "No title";
  price: number = 0.0;
  year: number = 0;
}