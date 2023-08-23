import { Component, Input, OnInit } from '@angular/core';

export interface RowElement {
  key: string;
  value: string;
}

@Component({
  selector: 'app-exchage-rate-response',
  templateUrl: './exchage-rate-response.component.html',
  styleUrls: ['./exchage-rate-response.component.scss']
})

export class ExchageRateResponseComponent implements OnInit {
  @Input() graphResponse: any[];
  displayedColumns: string[] = ["key", "value"];
  dataSource: RowElement[] = [];
  constructor() { }

  ngOnInit(): void {

    for (const key in this.graphResponse) {
      this.dataSource.push({ key, value: this.graphResponse[key] });
    }
  }
}
