import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {QuizService} from '../services/quiz.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {

  public quiz$: Observable<Quiz>;
  public timeLeft: number = 4;
  public timeLeft2: number = 20;
  public interval;
  public interval2;
  public showAnswers = false;
  public colors = ['color-one','color-two','color-three','color-four','color-five','color-six'];

  constructor(private quizService: QuizService,
              private router: Router,
              ) { }

  ngOnInit() {
    this.quiz$ = this.quizService.refreshQuiz();
    if (!this.showAnswers && this.quiz$) {
      this.startTimer();
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft -= 0.005;
      } else {
        this.timeLeft = 4;
        clearInterval(this.interval);
        this.startTimer2();
      }
    },1)
  }

  startTimer2() {
    this.showAnswers = true;
    this.interval2 = setInterval(() => {
      if(this.timeLeft2 > 0) {
        this.timeLeft2--;
      } else {
        this.timeLeft2 = 20;
        clearInterval(this.interval);
      }
    },1000)
  }
}
