import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  minYear = 2005;
  maxYear = 2015;

  years: number[];

  constructor() {
    this.years = new Array<number>(this.maxYear - this.minYear + 1).fill(undefined).map((x, i) => this.minYear + i);
  }

  ngOnInit() {}
}
