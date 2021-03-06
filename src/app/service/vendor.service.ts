import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  baseUrl: string;
  headers:any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:5000/vendor-service/vendor';
  }

  getAll(): Observable<Vendor[]> {
    
    return this.httpClient.get<Vendor[]>(this.baseUrl + '/getAll');
  }

  add(vendor: Vendor): Observable<Vendor> {
    return this.httpClient.post<Vendor>(this.baseUrl + '/add', vendor);
  }
  getVendorById(id: number): Observable<Vendor> {
    return this.httpClient.get<Vendor>(this.baseUrl + '/get/' + id);
  }
  deleteVendor(id: number): Observable<Vendor>{
    return this.httpClient.delete<Vendor>(this.baseUrl+"/delete/"+id);
  }
  update(vendor: Vendor): Observable<Vendor>{
    return this.httpClient.put<Vendor>(this.baseUrl, vendor);
  }
}
