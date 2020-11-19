import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CampaignStore } from './campaign.store';

@Injectable({ providedIn: 'root' })
export class CampaignService {

  constructor(private http: HttpClient, private store: CampaignStore) {
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
    return this.http.post(url, campaign)
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
}
