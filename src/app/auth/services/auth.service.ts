import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(value): Observable<any> {
    const url = `${environment.apiUrl}/sis_core/sign_in`;
    return this.http.post(url, value);
  }

  signUp(value): Observable<any> {
    const url = `${environment.apiUrl}/userAccount/signup`;
    return this.http.post(url, value);
  }

}
