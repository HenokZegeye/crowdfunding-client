import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private messageService: MessageService, public dialog: MatDialog) { }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity,
      summary,
      life: 4000,
      detail,
      closable: false,
    });
  }

  openDialog(component, height?, width?, data?, notClosable?) {
    const dialogRef = this.dialog.open(component,  {
      height,
      width,
      data,
      disableClose: notClosable
    });
    return dialogRef;
  }

  checkStoreValue(holder, query, service) {
    if (query.hasEntity()) {
      holder = query.selectAll();
    } else {
      service.get().subscribe();
    }
  }

  toFormData(formValue): FormData {
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }
    return formData;
  }

}
