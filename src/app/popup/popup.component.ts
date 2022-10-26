import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private dialog: MatDialog,
    private api: ApiService
  ) {}

  ngOnInit(): void {}

  companyform = this.builder.group({
    id: this.builder.control({ value: '', disable: true }),
    name: this.builder.control('', Validators.required),
    empcount: this.builder.control('', Validators.required),
    revenue: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    isactive: this.builder.control(true),
  });

  SaveCompany() {
    if (this.companyform.valid) {
      this.api.CreateComapny(this.companyform.value).subscribe((response) => {
        alert('saved successfully');
      });
    }
  }

  closepopup() {
    this.dialog.closeAll();
  }
}
