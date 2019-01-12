import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {QuizService} from '../services/quiz.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-presentateur',
  templateUrl: './presentateur.component.html',
  styleUrls: ['./presentateur.component.scss']
})
export class PresentateurComponent implements OnInit {

  public quiz$: Observable<Quiz>;

  constructor(private quizService: QuizService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.quiz$ = this.quizService.refreshQuiz();
    this.ifQuizzInProgress();
  }

  ifQuizzInProgress() {
    this.quiz$.subscribe( quiz => {
      if ( quiz && quiz.state === 'InProgress') {
        this.router.navigate(['/ask']);
      }
    });
  }

  startQuiz(id) {
    this.quizService.next(id);
    this.router.navigate(['/ask']);
  }

}
