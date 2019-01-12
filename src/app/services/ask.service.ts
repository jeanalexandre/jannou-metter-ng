import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  constructor(private httpClient: HttpClient) { }

  poll(idAsk, idAnswer): void {
    this.httpClient.post(`${environment.apiBaseUrl}/asks/${idAsk}/poll/${idAnswer}`, '').subscribe(result => {
    });
  }

  submit(idAsk, answer): void {
    this.httpClient.post(`${environment.apiBaseUrl}/asks/${idAsk}/submit/${answer}`, '').subscribe( result => {
    });
  }

  setDone(idAsk): void {
    this.httpClient.get(`${environment.apiBaseUrl}/asks/${idAsk}/isDone`).subscribe( result => {
    });
  }
}
