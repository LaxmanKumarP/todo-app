import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Ntodo } from '../shared/interfaces/todo';
import { environment } from 'src/environments/environment';

@Injectable()
export class NewtodoService {
  baseUrl = environment.baseUrl

  constructor(private http:HttpClient ) { }
  gdetTodos(): Observable<Ntodo[]>{
    return this.http.get(`${this.baseUrl}/mythings`).pipe(map(r =>{
      return r as Ntodo[]; 
    }));
  }
}
