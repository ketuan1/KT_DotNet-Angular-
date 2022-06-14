import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-t-don',
  templateUrl: './them-sua-t-don.component.html',
  styleUrls: ['./them-sua-t-don.component.scss']
})
export class ThemSuaTDonComponent implements OnInit {

  maThucDon: any;
  tenThucDon: any;
  @Input() tDon: any;


  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.tenThucDon = this.tDon.TenThucDon;
    this.maThucDon = this.tDon.MaThucDon;
  }

  themDSThucDon() {
    var val = {
      tenThucDon: this.tenThucDon
    };
    this.service.themDSThucDon(val).subscribe(res => {
      alert(res.toString());
    })
  }

  suaDSThucDon() {
    var val = {
      maThucDon: this.maThucDon,
      tenThucDon: this.tenThucDon
    };
    this.service.suaDSThucDon(val).subscribe(res => {
      alert(res.toString());
    })
  }

}
