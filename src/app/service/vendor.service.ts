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
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    
    this.headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
  }

  getAll(): Observable<Vendor[]> {
    
    return this.httpClient.get<Vendor[]>(this.baseUrl + '/getAll', 
          {headers: this.headers});
  }

  add(vendor: Vendor): Observable<Vendor> {
    return this.httpClient.post<Vendor>(this.baseUrl + '/add', vendor, {headers: this.headers});
  }
  getVendorById(id: number): Observable<Vendor> {
    return this.httpClient.get<Vendor>(this.baseUrl + '/get/' + id, {headers: this.headers});
  }
  deleteVendor(id: number): Observable<Vendor>{
    return this.httpClient.delete<Vendor>(this.baseUrl+"/delete/"+id, {headers: this.headers});
  }
  update(vendor: Vendor): Observable<Vendor>{
    return this.httpClient.put<Vendor>(this.baseUrl, vendor, {headers: this.headers});
  }
  
  createBasicAuthenticationHttpHeader(){
    let username = 'dipesh';
    let password = 'dipesh';
    let basicAuthHeaderString = 'Basic '+ window.btoa(username + ':'+ password);
    return basicAuthHeaderString;
  }
}
