import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {QuizService} from '../services/quiz.service';
import {Router} from '@angular/router';
import {Ask} from '../models/ask.model';
import {AskService} from '../services/ask.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {

  public quiz$: Observable<Quiz>;
  public timeLeft = 4;
  public timeLeft2 = 20;
  public ask: Ask;
  public interval;
  public interval2;
  public showAnswers = false;

  view: any[] = [900, 600];
  resultAsk: any[];
  // options
  showXAxis = true;
  showYAxis = true;
  showGridLine = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showDataLabel = true;
  showYAxisLabel = true;

  colorScheme = {domain: ['#1567d1', '#e51a40', '#e99900', '#00be27', '#8f52c1', '#00cccc']};


  constructor(private quizService: QuizService,
              private askService: AskService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.quiz$ = this.quizService.refreshQuiz();
    if (!this.showAnswers && this.quiz$) {
      this.startTimer();
      this.setAsk();
    }
  }

  public getResultFor(ask: Ask) {
    this.resultAsk = [];
    for (const answer of ask.answers) {
      this.resultAsk.push({'name': answer.entitled, 'value': answer.polling});
    }
  }

  public next(id): void {
    this.resultAsk = [];
    this.showAnswers = false;
    this.quizService.next(id);
    this.startTimer();
  }

  public end(id): void {
    this.quizService.next(id);
  }

  public resetQuiz(): void {
    this.quizService.reset();
  }

  private setDone(): void {
    this.resetTimers();
    this.getResultFor(this.ask);
    this.askService.setDone(this.ask.id);
  }

  private setAsk() {
    this.quiz$.subscribe(quiz => {
      if (quiz.state !== 'ToDo') {
        this.ask = quiz.asks.find(ask => ask.sort_order === quiz.currentAsk);
        if (this.ask.state === 'Done') {
          this.getResultFor(this.ask);
        }
      } else {
        this.router.navigate(['/presentateur']);
      }
    });
  }

  private startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 0.005;
      } else {
        this.startTimer2();
      }
    }, 1);
  }

  private startTimer2() {
    this.resetTimers();
    this.showAnswers = true;
    this.interval2 = setInterval(() => {
      if (this.timeLeft2 > 0 && this.ask.state !== 'Done') {
        this.timeLeft2--;
      } else {
        this.setDone();
      }
    }, 1000);
  }

  private resetTimers() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
    this.timeLeft = 4;
    this.timeLeft2 = 20;
  }

  onSelect(event) {
    console.log(event);
  }
}
