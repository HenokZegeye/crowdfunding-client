import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/shared/validators/generic.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();
  @Input() loading: boolean;
  hide = true;

  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userAccount_email: ['', [Validators.required, Validators.email]],
      userAccount_password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.validationMessages = {
      userAccount_email: {
        required: 'Email is required.',
        email: 'Invalid email format.'
      },
      userAccount_password: {
        required: 'Password is required.',
        minlength: 'Password should be more than 6 characters.'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.form)
    );
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onLogin() {
    this.formSubmit.emit(this.form.value);
  }

}
