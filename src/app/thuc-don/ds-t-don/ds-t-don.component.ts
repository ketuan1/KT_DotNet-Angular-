import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-t-don',
  templateUrl: './ds-t-don.component.html',
  styleUrls: ['./ds-t-don.component.scss']
})
export class DsTDonComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  DSThucDon: any = [];
  tDon: any = [];
  dangThemSua: boolean = false;
  tieuDe: any = [];

  ngOnInit(): void {
    this.UploadDSThucDon();
  }

  UploadDSThucDon() {
    this.service.layDSThucDon().subscribe(data => {
      this.DSThucDon = data;
    })
  }

  themThucDon() {
    this.tDon = {
      MaThucDon: 0,
      TenThucDon:""
    }
    this.dangThemSua = true;
    this.tieuDe = "Add menu";
  }

  chiTietThucDon(tDon: any) {
    this.tDon = tDon;
    this.dangThemSua = true;
    this.tieuDe = "Update menu";
  }

  xoaThucDon(tDon: any) {
    if(confirm("ban co chac muon xoa")){
      this.service.xoaDSThucDon(tDon.MaThucDon).subscribe(data => {
      
        alert(data.toString());
        this.UploadDSThucDon();
      });
    }
  }


  dong() {
    this.dangThemSua = false;
    this.UploadDSThucDon();
  }

}
