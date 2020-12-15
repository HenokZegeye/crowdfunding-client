import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UtilService } from '../../../../shared/services/util.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private router: Router,
    private service: AuthService,
    private utilService: UtilService
  ) {}

  ngOnInit() {}

  onLogin(value) {
    this.blockUI.start('Logging in ...');
    this.service.login(value).subscribe(
      (res) => {
          this.blockUI.stop();
          const token = this.decodeToken(res.signInToken);
          localStorage.setItem('userToken', res.signInToken);
          localStorage.setItem('accountType', token.accountType);
          localStorage.setItem(
            'userName', token.username
          );
          this.router.navigate(['/main/campaign']);
      },
      (err) => {
        this.blockUI.stop();
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
