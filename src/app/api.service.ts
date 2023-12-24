import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

    a='https://jsonplaceholder.typicode.com/todos/'
    b=this.a;

    getTodo(){
      return this.http.get(this.b)
    }


}
