import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DonationService } from '../../../../donation/state/donation.service';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {
  campaign;
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
              private donationSevice: DonationService) {
    this.campaign = data;
    this.form = this.fb.group({
      paymentAccount_receiverBankNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const id = this.campaign._id;
    this.donationSevice.withdraw(id, this.form.value).subscribe((res)=>{
      debugger
    })
  }

}
