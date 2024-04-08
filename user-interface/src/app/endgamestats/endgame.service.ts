import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndgameService {
  charsWrong : number = 0;
  charsCorrect : number = 0;
  time : number = 0;
  score : number = 0;

  constructor() { }

  setResults(wrong : number, right : number, time : number){
    this.charsWrong = wrong;
    this.charsCorrect = right;
    this.time = time;

    this.score = Math.ceil( (this.charsCorrect/time) * 10);
  }

}
