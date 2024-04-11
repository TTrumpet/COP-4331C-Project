import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiService {
  isMulti : boolean = false;
  turn : number = 0;

  p1CharsWrong : number = 0;
  p1CharsCorrect : number = 0;
  p1Score : number = 0;

  p2CharsWrong : number = 0;
  p2CharsCorrect : number = 0;
  p2Score : number = 0;

  time : number = 0;

  constructor() { }

  setResultsP1(wrong : number, right : number, time : number){
    this.p1CharsWrong = wrong;
    this.p1CharsCorrect = right;
    this.time = time;
    this.p1Score = Math.ceil( (this.p1CharsCorrect/time) * 10);

    
  }

  setResultsP2(wrong : number, right : number){
    this.p2CharsWrong = wrong;
    this.p2CharsCorrect = right;
    this.p2Score = Math.ceil( (this.p2CharsCorrect/this.time) * 10);
  }

}
