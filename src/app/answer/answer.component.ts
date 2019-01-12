import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {QuizService} from '../services/quiz.service';
import {Router} from '@angular/router';
import {AskService} from '../services/ask.service';
import {Ask} from '../models/ask.model';
import {LocalStorageService} from '../services/local-storage.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  public quiz$: Observable<Quiz>;
  public ask: Ask;
  public lastPollId;

  constructor(private quizService: QuizService,
              private askService: AskService,
              private localStorageService: LocalStorageService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.quiz$ = this.quizService.refreshQuiz();
    if (this.quiz$) {
      this.setAsk();
    }
  }

  poll(idAsk, idAnswer) {
    this.lastPollId = idAsk;
    this.localStorageService.saveLastAskRep(idAsk);
    this.askService.poll(idAsk, idAnswer);
  }

  submit(idAsk, answer) {
    this.localStorageService.saveLastAskRep(idAsk);
    this.askService.submit(idAsk, answer);
  }

  private setAsk() {
    this.quiz$.subscribe(quiz => {
      this.ask = quiz.asks.find(ask => ask.sort_order === quiz.currentAsk);
    });
  }
}
