import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionStore } from '../state/session.store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private store: SessionStore) { }

  login(value): Observable<any> {
    const url = `${environment.apiUrl}/userAccount/signin`;
    return this.http.post(url, value).pipe(
      tap(res=>{
        if (res.status==='success') {
          this.store.set(res.signInToken);
        }
      })
    )
  }

  logout() {
    this.store.reset();
  }

  signUp(value): Observable<any> {
    const url = `${environment.apiUrl}/userAccount/signup`;
    return this.http.post(url, value);
  }

}
