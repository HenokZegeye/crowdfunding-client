import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface FaqState extends EntityState<any> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'faqs', idKey: '_id' })
export class FaqStore extends EntityStore<FaqState> {
  constructor() {
    super();
  }

}
