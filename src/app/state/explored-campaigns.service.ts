import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UtilService } from '../shared/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class ExploredCampaignsService {

  constructor(private http: HttpClient,
              private utilService: UtilService) { }


  getCampaigns(category) {
    const url = `${environment.apiUrl}/campaigns`;
    return this.http.get<any[]>(url)
      .pipe(
        tap((result: any) => {
          /* this.store.set(result); */
        }, error => {
          console.log('Error');
        })
      );
  }


}
