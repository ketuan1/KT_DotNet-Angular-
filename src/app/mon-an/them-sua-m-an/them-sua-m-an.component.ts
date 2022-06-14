import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-m-an',
  templateUrl: './them-sua-m-an.component.html',
  styleUrls: ['./them-sua-m-an.component.scss']
})
export class ThemSuaMAnComponent implements OnInit {

  maThucDon: any;
  tenThucDon: any;
  @Input() tDon: any;
  thucDon: any;
  dsTenThucDon: any=[];

  anhMonAn: any;
  duongDanAnh: any;
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    // this.tenThucDon = this.tDon.TenThucDon;
    // this.maThucDon = this.tDon.MaThucDon;
    this.service.layDSTenThucDon().subscribe(data => {
      this.dsTenThucDon = data;
    })
    this.anhMonAn = "menu.jpg";
    this.duongDanAnh = this.service.PhotoUrl + "/" + this.anhMonAn;
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
    this.service.suaDSMonAn(val).subscribe(res => {
      alert(res.toString());
    })
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.taiAnh(formData).subscribe((data: any) => {
      this.anhMonAn = data.toString();
      this.duongDanAnh = this.service.PhotoUrl + "/" + this.anhMonAn;
    })
  }

}
