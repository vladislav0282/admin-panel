import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {  }

  setToken(token: string){
    localStorage.setItem('token', token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isloggedIn(){
    return this.getToken() !== null
  }

  login(userInfo: {email: string, password: string}): Observable<string | boolean>{
    if(userInfo.email === 'vladislav-belov@mail.com' && userInfo.password === 'Vl020282'){
      this.setToken('jljljljlljljljljljljljj')
      return of(true)
    }
    return throwError(() => new Error('Failed Login'))
  }
}
