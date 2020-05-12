import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { VendorService } from '../service/vendor.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  public vendors: Vendor[];
  vendor: Vendor;

   constructor(private vendorService: VendorService,private route: Router) {}

  ngOnInit() {
   this.vendorService.getAll().subscribe(data=>this.vendors=data);
  }

  delete(id: number){
    if(confirm(`Are you sure to delete the vendor#${id}`)){
      this.vendorService.deleteVendor(id).subscribe(data=>console.log(data));
    }
  }

  public setVendor(vendor: Vendor) {
    this.vendor = vendor;    
  }
}
