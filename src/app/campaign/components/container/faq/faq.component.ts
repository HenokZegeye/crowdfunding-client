import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaqService } from '../../../state/faq.service';
import { FaqQuery } from '../../../state/faq.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  form: FormGroup;
  @Input() campaign;
  faqs: any[] = [
    {faq_question: 'How can we do?', faq_answer: 'I do not know', editable: false}
  ];

  faqs$: Observable<any> = this.query.selectAll();

  constructor(private fb: FormBuilder,
              private service: FaqService,
              private query: FaqQuery) { }


  ngOnInit(): void {
    const id = this.campaign._id;
    this.service.get(id).subscribe();
    this.createForm();
  }

  createForm() {
   this.form = this.fb.group({
      campaignFaq_faqQuestion: '',
      campaignFaq_faqAnswer: ''
    });
  }

  blur() {

  }

  onCreate() {
    const id = this.campaign._id;
    this.service.add(this.form.value,id).subscribe();
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
