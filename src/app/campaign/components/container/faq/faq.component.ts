import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  form: FormGroup;
  faqs: any[] = [
    {faq_question: 'How can we do?', faq_answer: 'I do not know', editable: false}
  ];

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
   this.form = this.fb.group({
      faq_question: '',
      faq_answer: ''
    })
  }

  blur() {

  }

  onCreate() {
    this.faqs.push(this.form.value);
    this.form.reset();
  }

  onEdit(faq) {
    const index = this.faqs.indexOf(faq);
    this.faqs.splice(index, 1, { ...faq, editable: true});
  }

  onSave(faq) {
    const index = this.faqs.indexOf(faq);
    this.faqs.splice(index, 1, {...faq, editable: false});
  }

  onDelete(faq) {
    const index = this.faqs.indexOf(faq);
    this.faqs.splice(index, 1);
  }

}
