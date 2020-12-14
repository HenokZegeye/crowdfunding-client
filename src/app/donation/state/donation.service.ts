import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UtilService } from '../../shared/services/util.service';
import { DonationStore } from './donation.store';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient, private utilService: UtilService, private store: DonationStore) { }

  donate(campaignId, data) {
    const url = `${environment.apiUrl}/paymentTransfer/donate/${campaignId}`;
    return this.http.post(url, data)
      .pipe(
        tap((result: any) => {
          /* this.store.update({
            totalDonated: result.fundRecord[0].fundRecord_totalDonations,
            donationPercentage: result.fundRecord[0].fundRecord_raisedPercentage
          }); */
        }, error => {
          console.log('error');
        })
      );
  }

  withdraw(campaignId, data) {
    const url = `${environment.apiUrl}/paymentTransfer/withdraw/${campaignId}`;
    return this.http.post(url, data)
      .pipe(
        tap((result: any) => {

        }, error => {
          console.log('error');
        })
      )
  }
}
