import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { reviewsDataService } from '../review-data.service';
import { Router } from '@angular/router';

import { review } from '../review-list/review-list.component';
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddreviewComponent implements OnInit {
  title!: string;
  price!: number;
  rate!: number;
  year!: number;
  minPlayers!: number;
  maxPlayers!: number;
  minAge!: number;

  constructor(private reviewsDataService: reviewsDataService, 
    private route: ActivatedRoute,private router:Router) { }

ngOnInit(): void {

}

public addreview(data:any){
  console.log(data);
  this.reviewsDataService.addreview(data)
      .then(response => this.addedreview(response))
      .catch(this.handleError);
}

private addedreview(review: review) {
  this.router.navigate(['/reviews']);
  console.log("review added ");
  console.log(review);
}

private handleError(error: any) {
  console.log("Error " + error)
}
}
