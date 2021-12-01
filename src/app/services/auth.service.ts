import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://adirapi.herokuapp.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post('https://cometaa.herokuapp.com/api/auth/' + 'signin', {
      email,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, role: any): Observable<any> {
    return this.http.post('https://cometaa.herokuapp.com/api/auth/' + 'signup', {
      username,
      email,
      password,
      role
    }, httpOptions);
  }
}
