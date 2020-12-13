import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericValidator } from '../../../../shared/validators/generic.validator';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.scss']
})
export class DonationFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formClose = new EventEmitter<void>();

  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form = this.fb.group({
        paymentAccount_senderBankNumber:['',[Validators.required, Validators.min(0)]],
        paymentTransfer_transferAmount: ['', [Validators.required, Validators.min(0)]]
      });

      this.validationMessages = {
        paymentAccount_senderBankNumber: {
          required: 'Account number is required.',
          min: 'Minimum value is 0.'
        },
        paymentTransfer_transferAmount: {
          required: 'Donation amount is required.',
          min: 'Minimum value is 0.'
        }
      }

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

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }

  onCancel() {
    this.formClose.emit();
  }

}
