import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {QuizService} from '../services/quiz.service';
import {LocalStorageService} from '../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  public quiz$: Observable<Quiz>;

  constructor(private quizService: QuizService,
              private localStorageService: LocalStorageService,
              private router: Router,
              ) { }

  ngOnInit() {
    this.quiz$ = this.quizService.refreshQuiz();
  }

  leaveLobby(id): void {
    this.quizService.unsubscribe(id);
    this.localStorageService.clearLocalStorage();
    this.router.navigate(['/public']);
  }

}
