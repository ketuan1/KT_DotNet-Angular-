import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  
  
  
export class SharedService {

  //link api
  readonly APIUrl = " http://localhost:5205/api";
  readonly PhotoUrl = " http://localhost:5205/Photos";


  constructor(private http: HttpClient) { }
  
  layDSThucDon(): Observable < any[] > {
    return this.http.get<any>(this.APIUrl + '/ThucDon');
  }

  themDSThucDon(val:any) {
    return this.http.post(this.APIUrl + '/ThucDon', val);
  }
  
  suaDSThucDon(val:any) {
    return this.http.put(this.APIUrl + '/ThucDon', val);
  }

  xoaDSThucDon(val:any) {
    return this.http.delete(this.APIUrl + '/ThucDon/'+val);
  }


  layDSMonAn(): Observable < any[] > {
    return this.http.get<any>(this.APIUrl + '/MonAn');
  }

  themDSMonAn(val:any) {
    return this.http.post(this.APIUrl + '/MonAn', val);
  }
  
  suaDSMonAn(val:any) {
    return this.http.put(this.APIUrl + '/MonAn', val);
  }

  xoaDSMonAn(val:any) {
    return this.http.delete(this.APIUrl + '/MonAn/'+val);
  }

  taiAnh(val:any) {
    return this.http.post<any>(this.APIUrl + '/MonAn/SaveFile', val);
  }

  layDSTenThucDon(): Observable <any[]> {
    return this.http.get<any>(this.APIUrl + '/MonAn/GetAllThucDon');
  }


}
