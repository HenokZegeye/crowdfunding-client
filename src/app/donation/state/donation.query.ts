import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DonationStore, DonationState } from './donation.store';

@Injectable({ providedIn: 'root' })
export class DonationQuery extends QueryEntity<DonationState> {

  constructor(protected store: DonationStore) {
    super(store);
  }

  selectTotalRaised() {
    return this.select(state=>state.totalDonated);
  }

  selectDonationPercentage() {
    return this.select(state=>state.donationPercentage);
  }
}
