import {Component, OnInit} from '@angular/core';
import {QuizService} from '../services/quiz.service';
import {Quiz} from '../models/quiz.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public quiz$: Observable<Quiz>;

  constructor(private quizService: QuizService,
              private localStorageService: LocalStorageService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.quiz$ = this.quizService.refreshQuiz();
  }

  goToLobby(id): void {
    this.quizService.subscribe(id);
    this.localStorageService.saveCurrentQuizId(id);
    this.router.navigate(['/lobby']);
  }


}
