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

  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      first_name: [
        '',
        [Validators.required, Validators.pattern(/[a-zA-Z\s]$/)],
      ],
      last_name: ['', [Validators.required, Validators.pattern(/[a-zA-Z\s]$/)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });

    this.validationMessages = {
      first_name: {
        required: 'First name is required.',
        pattern: 'Invalid name format'
      },
      last_name: {
        required: 'Last name is required.',
        pattern: 'Invalid name format'
      },
      email: {
        required: 'Email is required.',
        email: 'Invalid email format'
      },
      phoneNumber: {
        required: 'Phone number is required.'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit(): void {
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }

}
