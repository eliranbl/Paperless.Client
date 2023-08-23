import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExchageRateService } from '../exchage-rate-response/exchageRate.services';


@Component({
  selector: 'app-exchage-rate-request',
  templateUrl: './exchage-rate-request.component.html',
  styleUrls: ['./exchage-rate-request.component.scss']
})

export class ExchageRateRequestComponent {
  response: any[];
  constructor(private exchageRateService: ExchageRateService) {
  }

  isBtnEnabled: boolean = false;
  date = new FormControl('', [Validators.required, Validators.pattern("^([0-2]{1})([0-9]{1})(0[1-9]|1[0-2])$")]);

  getErrorMessage() {
    if (this.date.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.date.hasError('pattern')) {
      return 'The formt have to be YYMM year start from 00';
    }
    else {
      return '';
    }
  }

  send() {
    this.exchageRateService.getExchageRate(this.date.value)
      .subscribe(data => {
        this.response = data.GRAPH[0];
      })
  }
}
