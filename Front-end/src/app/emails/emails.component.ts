import { Component } from '@angular/core';
import { ApiService } from '../api-service.service';
import { Email } from '../models/email.model';
import { MatTableDataSource } from '@angular/material/table';
import { OutgoingEmail } from '../models/outgoingemail.model';
import { MatDialog } from '@angular/material/dialog';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';
import { SendEmailModalComponent } from '../send-email-modal/send-email-modal.component';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent {
  receivedEmails: Email[] = [];
  sentEmails: OutgoingEmail[] = [];
  displayedColumnsReceived: string[] = ['date', 'subject', 'fromName', 'fromEmail'];
  displayedColumnsSent: string[] = ['date', 'subject', 'fromName', 'receiverEmail'];
  constructor(private apiService: ApiService, private dialog: MatDialog) {
 
  }

  ngOnInit(): void {
    this.getOrganizationReceivedEmails()
    this.getOrganizationSentEmails()
  }

  getOrganizationReceivedEmails() {
    this.apiService.getOrganizationReceivedEmailList()
    .subscribe(emails => {
      this.receivedEmails = emails;
    });
  }

  getOrganizationSentEmails() {
    this.apiService.getOrganizationSentEmailList()
    .subscribe(emails => {
      this.sentEmails = emails;
    });
  }

  openModal() {
    var dialogRef = this.dialog.open(SendEmailModalComponent);

    dialogRef.afterClosed().subscribe(() => this.getOrganizationSentEmails());
  }
}
