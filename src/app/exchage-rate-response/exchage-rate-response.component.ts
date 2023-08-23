import { Component, Input, OnInit } from '@angular/core';
import { Graph } from './exchageRate.model';

@Component({
  selector: 'app-exchage-rate-response',
  templateUrl: './exchage-rate-response.component.html',
  styleUrls: ['./exchage-rate-response.component.scss']
})

export class ExchageRateResponseComponent implements OnInit {
  @Input() graphResponse: Graph[];
  displayedColumns: string[] = ['daty on moth', 'rate'];
  dataSource: Graph[];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.graphResponse;
  }
}
