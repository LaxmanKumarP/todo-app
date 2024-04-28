import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Itodo } from '../shared/interfaces/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OldTodoService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }
  getTodos(): Observable<Itodo[]> {
    return this.http.get(`${this.baseUrl}/todos`)
    .pipe(map(res => {
        return res as Itodo[];
      }))
  }
}
