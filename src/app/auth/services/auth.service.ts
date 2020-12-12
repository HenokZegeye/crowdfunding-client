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

  forgetPassword(value): Observable<any> {
    const url = `${environment.apiUrl}/applicants/generate_recovery_token`;
    return this.http.post(url, value);
  }

  resetPassword(value): Observable<any> {
    const url = `${environment.apiUrl}/applicants/reset_password`;
    return this.http.post(url, value);
  }

  signUp(value): Observable<any> {
    const url = `${environment.apiUrl}/applicants/sign_up`;
    return this.http.post(url, value);
  }

  reCaptcha(data): Observable<any> {
    const url = `https://www.google.com/recaptcha/api/siteverify`;
    return this.http.post(url, data);
  }


}
