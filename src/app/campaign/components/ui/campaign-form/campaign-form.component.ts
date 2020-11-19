import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericValidator } from 'src/app/shared/validators/generic.validator';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formClose = new EventEmitter<void>();
  categories: any[] = [
    'Medicine',
    'School'
  ];

  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      id: null,
      campaign_title: [data.formData.campaign_title, Validators.required],
      campaign_tagline: [data.formData.campaign_tagline, Validators.required],
      campaign_type: [data.formData.campaign_type, Validators.required],
      campaign_category: [data.formData.campaign_category, Validators.required],
      region: [data.formData.region, Validators.required],
      city: [data.formData.city, Validators.required],
      campaign_fundGoal: [data.formData.campaign_fundGoal, Validators.required],
      campaign_endingDate: [data.formData.campaign_endingDate, Validators.required],
      campaign_story: [data.formData.campaign_story, Validators.required],
      campaign_coverPicture: [data.formData.campaign_coverPicture]
    });

    this.validationMessages = {
      campaign_title: {
        required: 'Title is required.'
      },
      campaign_tagline: {
        required: 'Tagline is required.'
      },
      campaign_type: {
        required: 'Type is required.'
      },
      campaign_category: {
        required: 'Category is required.'
      },
      campaign_fundGoal: {
        required: 'Fundraising goal is required.'
      },
      region: {
        required: 'Region is required.'
      },
      city: {
        required: 'City is required.'
      },
      campaign_story: {
        required: 'Story is required.'
      },
      campaign_endingDate: {
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

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }

  onPhotoSelect(event) {

  }

  onPhotoRemove() {

  }

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }

  onCancel() {
    this.formClose.emit();
  }

}
