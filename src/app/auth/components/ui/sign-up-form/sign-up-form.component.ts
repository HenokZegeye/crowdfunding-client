import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidator } from '../../../../shared/validators/generic.validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();
  hide = true;

  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userAccount_firstName: [
        '',
        [Validators.required, Validators.pattern(/[a-zA-Z\s]$/)],
      ],
      userAccount_lastName: ['', [Validators.required, Validators.pattern(/[a-zA-Z\s]$/)]],
      userAccount_email: ['', [Validators.required, Validators.email]],
      userAccount_phoneNumber: ['', Validators.required],
      userAccount_password: ['', [Validators.required, Validators.min(6)]],
      password_confirmation: [''],
    },
    { validator: this.checkPasswords });

    this.validationMessages = {
      userAccount_firstName: {
        required: 'First name is required.',
        pattern: 'Invalid name format'
      },
      userAccount_lastName: {
        required: 'Last name is required.',
        pattern: 'Invalid name format'
      },
      userAccount_email: {
        required: 'Email is required.',
        email: 'Invalid email format'
      },
      userAccount_phoneNumber: {
        required: 'Phone number is required.'
      },
      userAccount_password: {
        required: 'Password is required.',
        notSame: 'Password not match.',
        minlength: 'Minimum password length should be 6 characters.'
      },
      password_confirmation: {
        notSame: 'Password not match.'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.form)
    );
  }

  onPasswordInput() {
    if (this.form.hasError('notSame')) {
      this.form.controls.password_confirmation.setErrors({
        notSame: true,
      });
    } else {
      this.form.controls.password_confirmation.setErrors(null);
    }
  }

  checkPasswords(form: FormGroup) {
    const pass = form.get('userAccount_password').value;
    const confirmPass = form.get('password_confirmation').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }

}
