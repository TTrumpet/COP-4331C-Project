import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private baseUrl = 'http://localhost:5000';
 
  constructor(private http : HttpClient){}
  updateLB(): Observable<{ name: string; score: number }[]> {
    return this.http.get<{ name: string; score: number }[]>(`${this.baseUrl}/top_scores`);
  }
}
