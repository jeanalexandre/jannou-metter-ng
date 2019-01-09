import { Component, OnInit } from '@angular/core';
import {QuizService} from "../services/quiz.service";
import {Quiz} from "../models/quiz.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public quiz$: Observable<Quiz>;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quiz$ = this.quizService.refreshQuiz();
  }

}
