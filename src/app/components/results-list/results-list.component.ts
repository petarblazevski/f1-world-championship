import { Component, Input, OnInit } from '@angular/core';
import { IRace } from '../../models/race';
import { IDriverStanding } from '../../models/driver-standing';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  @Input() races: IRace[];
  @Input() champion: IDriverStanding;

  constructor() {}

  ngOnInit() {}
}
