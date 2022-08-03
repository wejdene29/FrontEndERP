import { utilisateur } from 'src/app/back/utilisateur';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'jquery';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'authenticate', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, etat: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      etat,
      password
    }, httpOptions);
  }
}