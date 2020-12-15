import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface SessionState extends EntityState<any> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session', idKey: '_id', resettable: true })
export class SessionStore extends EntityStore<SessionState> {
  constructor() {
    super();
  }

}
