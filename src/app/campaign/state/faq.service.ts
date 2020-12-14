import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { FaqStore } from './faq.store';
import { UtilService } from '../../shared/services/util.service';
import { DonationStore } from '../../donation/state/donation.store';

@Injectable({ providedIn: 'root' })
export class FaqService {

  constructor(private http: HttpClient,
              private store: FaqStore,
              private utilService: UtilService,
              private donationStore: DonationStore) {
  }


  get(campaignId) {
    const url = `${environment.apiUrl}/campaigns/${campaignId}/faq`;
    return this.http.get<any[]>(url)
      .pipe(
        tap((result: any) => {
          this.store.set(result.campaignFaq);
        }, error => {
          console.log('Error');
        })
      );
  }

  add(faq, campaignId) {
    const url = `${environment.apiUrl}/campaigns/${campaignId}/faq`;
    return this.http.post(url, faq)
      .pipe(
        tap((result: any) => {
          this.store.add(result);
        }, error => {
          console.log('Error');
        })
      );
  }

  update(id, campaign: Partial<any>) {
    const url = `${environment.apiUrl}/campaigns/${id}`;
    return this.http.put(url, { course: campaign })
      .pipe(
        tap((result: any) => {
          if (result.success) {
            console.log('Successfully updated');
          } else {
            console.log('Error');
          }
        }, error => {
          console.log('Error')
        })
      );
  }

  show(id) {
    const url = `${environment.apiUrl}/campaigns/${id}`;
    return this.http.get(url)
      .pipe(
        tap((result: any) => {
          this.donationStore.update({
            totalDonated: result.fundRecord[0].fundRecord_totalDonations,
            donationPercentage: result.fundRecord[0].fundRecord_raisedPercentage
          });
          this.store.update({currentCampaign: result});
        }, error => {
          console.log('Error');
        })
      )
  }

  setActive(id) {
    this.store.setActive(id);
  }
}
