import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  getTopTen(): Observable<any[]>{
    //Replace fakeData with API call to fetch data from database.
    const fakeData = [ 
      {name: 'Player 1', score: 120},
      {name: 'Player2',  score: 100},
      {name: 'Player3',  score: 99},
      {name: 'Player4',  score: 40},
      {name: 'Player5',  score: 39},
      {name: 'Player6',  score: 38},
      {name: 'Player7',  score: 20},
      {name: 'Player8',  score: 19},
      {name: 'Player9',  score: 18},
      {name: 'Player10',  score: 17},
    ];
    return of(fakeData);

    
  }
}
