import { Component, Input, OnInit } from '@angular/core';
import { IRace } from '../../models/race';
import { IDriverStanding } from '../../models/driver-standing';
import { animate, animateChild, query, stagger, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
  animations: [
    trigger('race', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }), // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ transform: 'scale(1)', opacity: 1 })) // final
      ])
    ]),
    trigger('races', [transition(':enter', [query('@race', stagger(200, animateChild()))])])
  ]
})
export class ResultsListComponent implements OnInit {
  @Input() races: IRace[];
  @Input() champion: IDriverStanding;

  constructor() {}

  ngOnInit() {}
}
