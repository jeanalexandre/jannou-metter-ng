import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {QuizService} from '../services/quiz.service';
import {Router} from '@angular/router';
import {AskService} from '../services/ask.service';
import {Ask} from '../models/ask.model';
import {LocalStorageService} from '../services/local-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  freeStringForm: FormGroup;

  public quiz$: Observable<Quiz>;
  public ask: Ask;
  public lastPollId;

  constructor(private quizService: QuizService,
              private askService: AskService,
              private localStorageService: LocalStorageService,
              private formBuilder: FormBuilder,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.quiz$ = this.quizService.refreshQuiz();
    if (this.quiz$) {
      this.setAsk();
    }
    this.freeStringForm = this.formBuilder.group({
      resume: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  get resume() {
    return this.freeStringForm.get('resume');
  }

  poll(idAsk, idAnswer) {
    this.lastPollId = idAsk;
    this.localStorageService.saveLastAskRep(idAsk);
    this.askService.poll(idAsk, idAnswer);
  }

  onSubmit(idAsk) {
    this.lastPollId = idAsk;
    this.localStorageService.saveLastAskRep(idAsk);
    this.askService.submit(idAsk, this.resume.value.toUpperCase());
  }

  private setAsk() {
    this.quiz$.subscribe(quiz => {
      if (quiz.state === 'Done') {
        this.router.navigate(['/email']);
      } else if (quiz.state === 'InProgress') {
        this.ask = quiz.asks.find(ask => ask.sort_order === quiz.currentAsk);
      } else {
        this.router.navigate(['/public']);
      }
    });
  }
}
