import { Component, OnInit } from '@angular/core';
import { companymodel } from '../Model/companymodel';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
// import { COMPANY } from '/server/server.ts';
const COMPANY: companymodel[] = [
  {
    id: 1,
    name: 'Hang Ngo',
    empcount: 1,
    revenue: 1,
    address: 'Thanh Hoa',
    isactive: true,
  },
  {
    id: 2,
    name: 'Risa',
    empcount: 2,
    revenue: 2,
    address: 'Da Lat',
    isactive: true,
  },
  {
    id: 3,
    name: 'Hana Lala',
    empcount: 3,
    revenue: 3,
    address: 'Da Nang',
    isactive: true,
  },
];

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  companydata!: companymodel[];
  // finaldata: any;

  displayedColumns: string[] = [
    'id',
    'name',
    'empcount',
    'revenue',
    'address',
    'isactive',
    'action',
  ];

  finaldata = COMPANY;

  constructor(private dialog: MatDialog) {}

  Openpopup(id: any) {
    const _popup = this.dialog.open(PopupComponent, {
      width: '800px',
      exitAnimationDuration: '500ms',
      enterAnimationDuration: '500ms',
      data: {
        id: id,
      },
    });
    _popup.afterClosed().subscribe((r) => {
      this.LoadCompany();
    });
  }

  LoadCompany() {
    // this.api.Getallcomapny().subscribe(response => {
    //   this.companydata = response;
    //   this.finaldata=new MatTableDataSource<companymodel>(this.companydata);
    //   this.finaldata.paginator=this._paginator;
    //   this.finaldata.sort=this._sort;
    // });
  }

  ngOnInit(): void {}
}
