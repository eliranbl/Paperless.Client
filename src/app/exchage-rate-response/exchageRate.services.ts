import { Injectable } from "@angular/core";
import { ExchageRateResponse } from "./exchageRate.model";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ExchageRateService {
    constructor(private http: HttpClient) { }

    public getExchageRate(date: any): Observable<ExchageRateResponse> {
        var url = 'http://localhost:7290/api/currency/' + date;
        return this.http.get<ExchageRateResponse>(url);;
    }
}