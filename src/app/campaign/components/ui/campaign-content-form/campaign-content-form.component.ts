import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/shared/validators/generic.validator';

@Component({
  selector: 'app-campaign-content-form',
  templateUrl: './campaign-content-form.component.html',
  styleUrls: ['./campaign-content-form.component.scss']
})
export class CampaignContentFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formClose = new EventEmitter<void>();
  categories;

  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: null,
      title: ['', Validators.required],
      tagline: ['', Validators.required],
      type: ['', Validators.required],
      category_id: ['', Validators.required],
      region: ['', Validators.required],
      city: ['', Validators.required],
      goal: ['', Validators.required],
      end_date: ['', Validators.required],
      story: ['', Validators.required],
      cover_picture: ['', Validators.required]
    });

    this.validationMessages = {
      title: {
        required: 'Title is required.'
      },
      tagline: {
        required: 'Tagline is required.'
      },
      type: {
        required: 'Type is required.'
      },
      category_id: {
        required: 'Category is required.'
      },
      goal: {
        required: 'Fundraising goal is required.'
      },
      region: {
        required: 'Region is required.'
      },
      city: {
        required: 'City is required.'
      },
      story: {
        required: 'Story is required.'
      },
      end_date: {
        required: 'End date is required.'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.form)
    );
  }

  onPhotoSelect(event) {

  }

  onPhotoRemove() {

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
