import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CampaignStore } from './campaign.store';
import { UtilService } from '../../shared/services/util.service';
import { DonationStore } from '../../donation/state/donation.store';

@Injectable({ providedIn: 'root' })
export class CampaignService {

  constructor(private http: HttpClient,
              private store: CampaignStore,
              private utilService: UtilService,
              private donationStore: DonationStore) {
  }


  get() {
    const url = `${environment.apiUrl}/campaigns`;
    return this.http.get<any[]>(url)
      .pipe(
        tap((result: any) => {
          this.store.set(result);
        }, error => {
          console.log('Error');
        })
      );
  }

  add(campaign) {
    const url = `${environment.apiUrl}/campaigns`;
    const campaignFormData = this.utilService.toFormData(campaign);
    return this.http.post(url, campaignFormData)
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
