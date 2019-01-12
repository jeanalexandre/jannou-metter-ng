import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorage = window.localStorage;

  constructor() { }

  public findCurrentQuizId(): number {
    return +this.localStorage.getItem('quizId');
  }

  public findLastAskRep(): number {
    return +this.localStorage.getItem('lastAskRep');
  }

  public saveLastAskRep(id): void {
    this.localStorage.setItem('lastAskRep', id);
  }

  public saveCurrentQuizId(id): void {
    this.localStorage.setItem('quizId', id);
  }

  public clearLocalStorage(): void {
    this.localStorage.clear();
  }

}
