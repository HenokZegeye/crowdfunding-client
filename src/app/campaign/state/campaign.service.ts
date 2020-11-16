import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CampaignService {

  constructor(private http: HttpClient) {
  }


  get() {
    const url = `${environment.apiUrl}/campaigns`;
    return this.http.get<any[]>(url)
      .pipe(
        tap((result: any) => {
          console.log('Successfully loaded');
          /* if (result.success) {
            console.log('Successfully loaded');
          } else {
            const errors = result.errors;
            const errorMessage = errors.join();
            console.log('Error');
          } */
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
          if (result.success) {
            console.log('Successfully added');
          } else {
            const errors = result.errors;
            const errorMessage = errors.join();
            /* this.utilService.showMessage('error', 'Error', errorMessage); */
            console.log('Error');
          }
        }, error => {
          /* this.utilService.showMessage('error', 'Error', error.error.errors.join()); */
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
            const errors = result.errors;
            const errorMessage = errors.join();
            /* this.utilService.showMessage('error', 'Error', errorMessage); */
            console.log('Error');
          }
        }, error => {
          console.log('Error')
          /* this.utilService.showMessage('error', 'Error', error.error.errors.join()); */
        })
      );
  }
}
