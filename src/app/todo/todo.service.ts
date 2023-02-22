import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Itodo } from '../shared/interfaces/todo';
import { map } from 'rxjs/operators'

@Injectable()
export class TodoService {

  constructor(private http:HttpClient) { }
  getTodos(): Observable<Itodo[]>{
    return this.http.get('http://localhost:3000/todos').pipe(
      map(res=> {return res as Itodo[]}
    ));
    
  }
}
