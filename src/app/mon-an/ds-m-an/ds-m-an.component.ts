import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-m-an',
  templateUrl: './ds-m-an.component.html',
  styleUrls: ['./ds-m-an.component.scss']
})
export class DsMAnComponent implements OnInit {


  DSThucDon: any = [];
  tDon: any = [];
  dangThemSua: boolean = false;
  tieuDe: any = [];


  constructor(private service: SharedService) { 
    this.UploadDSThucDon();
  }

  ngOnInit(): void {
  }

  UploadDSThucDon() {
    this.service.layDSMonAn().subscribe(data => {
      this.DSThucDon = data;
    })
  }

  themThucDon() {
    this.tDon = {
      MaThucDon: 0,
      TenThucDon:""
    }
    this.dangThemSua = true;
    this.tieuDe = "Thêm món ăn";
  }

  chiTietThucDon(tDon: any) {
    this.tDon = tDon;
    this.dangThemSua = true;
    this.tieuDe = "Sữa món ăn";
  }

  xoaThucDon(moAn: any) {
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.xoaDSThucDon(moAn.MaThucDon).subscribe(data => {
      
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
