import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UtilService } from '../../../../shared/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private service: AuthService,
    private utilService: UtilService
  ) {}

  ngOnInit() {}

  onLogin(value) {
    this.service.login(value).subscribe(
      (res) => {
        if (res.success) {
          const token = this.decodeToken(res.jwt);
          localStorage.setItem('userToken', res.jwt);
          localStorage.setItem(
            'userName',
            `${token.first_name} ${token.middle_name}`
          );
          localStorage.setItem('userId', token.id);
          this.router.navigate(['/main']);
        } else {
          this.utilService.showMessage('error','Error', 'Invalid login credentials. Please try again.');
        }
      },
      (err) => {
        if (err.status === 401) {
          this.utilService.showMessage('error','Error', 'Invalid login credentials. Please try again.');
        } else {
          this.utilService.showMessage('error','Error', 'Something bad happened. Please try again.');
        }
      }
    );
  }

  decodeToken(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const result = JSON.parse(window.atob(base64));
    return result;
  }
}
