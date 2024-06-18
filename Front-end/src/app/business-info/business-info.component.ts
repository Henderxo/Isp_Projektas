import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../api-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user.model'
import { MatDialog } from '@angular/material/dialog';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';
import { Organization } from '../models/organization.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sponsor } from '../models/sponsor.model'

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {
  title: string  = ' RVIPS ';
  constructor(){}

  ngOnInit(): void {
    
  }
  openModal() {
    //var dialogRef = this.dialog.open(AddUserModalComponent);

    // dialogRef.afterClosed().subscribe(() => this.getSponsorInfo());
  }

  updateTitle(value: string){
    console.log('updateTitle: ${value}');
    this.title = value;
  }
}
