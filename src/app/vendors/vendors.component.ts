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
  message: string;

   constructor(private vendorService: VendorService,private route: Router) {}

  ngOnInit() {
   this.refreshVendors();
  }

  setMessage(){
    this.message = "";
  }

  refreshVendors(){
    this.vendorService.getAll().subscribe(data=>this.vendors=data);
  }

  delete(id: number){
    if(confirm(`Are you sure to delete the vendor#${id}`)){
      this.vendorService.deleteVendor(id).subscribe(data=>{
          console.log(data)
          this.message = `Vendor with id ${id} has been deleted`;
          this.refreshVendors();
       })
     }
  }

  public setVendor(vendor: Vendor) {
    this.vendor = vendor;    
  }
}
