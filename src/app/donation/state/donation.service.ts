import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UtilService } from '../../shared/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient, private utilService: UtilService) { }

  donate(campaignId, data) {
    const url = `${environment.apiUrl}/donate/${campaignId}`;
    return this.http.post(url, data)
      .pipe(
        tap((result: any) => {
          //Update store
        }, error => {
          console.log('error');
        })
      );
  }
}
