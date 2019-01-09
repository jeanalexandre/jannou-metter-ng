import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorage = window.localStorage;

  constructor() { }

  public findCurrentQuizId(): string {
    return this.localStorage.getItem('quizId');
  }

  public saveCurrentQuizId(id): void {
    this.localStorage.setItem('quizId', id);
  }

  public clearLocalStorage(): void {
    this.localStorage.clear();
  }

}
