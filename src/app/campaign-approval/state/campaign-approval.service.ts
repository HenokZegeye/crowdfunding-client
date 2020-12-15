import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CampaignApprovalStore } from './campaign-approval.store';
import { UtilService } from 'src/app/shared/services/util.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CampaignApprovalService {

  constructor(private campaignApprovalStore: CampaignApprovalStore, private http: HttpClient,
              private utilService: UtilService) {
  }


  getUnapprovedCampaign() {
    const url = `${environment.apiUrl}/campaigns/status/waiting`;
    return this.http.get<any[]>(url)
      .pipe(
        tap((result: any) => {
            this.campaignApprovalStore.set(result.campaign);
        }, error => {
          this.utilService.showMessage('error', 'Error', error.error.errors.join());
        })
      );
  }

  approveCampaign(id) {
    const url = `${environment.apiUrl}/campaigns/status/${id}/approve`;
    return this.http.post(url, {})
      .pipe(
        tap((result: any) => {
          console.log('Approved');
        }, error => {
          this.utilService.showMessage('error', 'Error', error.error.errors.join());
        })
      )
  }

  declineCampaign(id) {
    const url = `${environment.apiUrl}/campaigns/status/${id}/reject`;
    return this.http.post(url, {})
      .pipe(
        tap((result: any) => {
          console.log('Rejected');
        }, error => {
          this.utilService.showMessage('error', 'Error', error.error.errors.join());
        })
      )
  }

}
