import {Injectable} from '@angular/core';
import {interval, merge, Observable, of, Subject} from "rxjs";
import {Quiz} from "../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {distinctUntilChanged, filter, first, map, share, switchMap, takeWhile, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient) {
  }

  refreshQuiz(): Observable<Quiz> {
    return merge(interval(1000), of('')).pipe(
      switchMap(() => this.httpClient.get<Quiz>(`${environment.apiBaseUrl}/quizz`)),
      map( array => array[0]),
      share(),
      filter(val => val),
      distinctUntilChanged(),
    );
  }
}
