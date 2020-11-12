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
  categories: any[] = [];

  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private readonly validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
        this.form = this.fb.group({
          id: null,
          title: [data.formData.title, Validators.required],
          tagline: [data.formData.tagline, Validators.required],
          type: [data.formData.type, Validators.required],
          category_id: [data.formData.category_id, Validators.required],
          region: [data.formData.region, Validators.required],
          city: [data.formData.city, Validators.required],
          goal: [data.formData.goal, Validators.required],
          end_date: [data.formData.end_date, Validators.required],
          story: [data.formData.story, Validators.required],
          cover_picture: [data.formData.cover_picture, Validators.required]
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
