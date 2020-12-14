import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../../shared/services/util.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private service: AuthService,
              private utilService: UtilService) { }

  ngOnInit(): void {
  }

  onSubmit(event) {
    if (event) {
      this.service
        .signUp(event)
        .subscribe(
          (res) => {
            this.utilService.showMessage('success', 'Success', 'Account created successfully.');
          },
          (err) => {
            this.utilService.showMessage('error','Error', err.error.errors.join());
          }
        );
    }
  }

}
