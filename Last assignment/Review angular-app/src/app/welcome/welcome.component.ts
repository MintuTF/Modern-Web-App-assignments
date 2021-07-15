import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title: string = "Mean reviews";
  number: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}