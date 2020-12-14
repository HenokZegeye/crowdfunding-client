import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface DonationState extends EntityState<any> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'donations', idKey: '_id' })
export class DonationStore extends EntityStore<DonationState> {
  constructor() {
    super();
  }

}
