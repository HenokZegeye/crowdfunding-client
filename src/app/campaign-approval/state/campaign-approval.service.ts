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
    const url = `${environment.apiUrl}/campaign/unapproved`;
    return this.http.get<any[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.campaignApprovalStore.set(result.data);
          } else {
            const errors = result.errors;
            const errorMessage = errors.join();
            this.utilService.showMessage('error', 'Error', errorMessage);
          }
        }, error => {
          this.utilService.showMessage('error', 'Error', error.error.errors.join());
        })
      );
  }

  approveCampaign() {

  }

}
