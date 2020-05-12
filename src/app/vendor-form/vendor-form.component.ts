import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent implements OnInit {
  vendor: Vendor;
  msg:string;
  isNew:boolean;

  constructor(private actRoute: ActivatedRoute,
    private router: Router,
    private vendorService: VendorService) {
    
   }

  ngOnInit() {
    let id = this.actRoute.snapshot.params.id;
    if(id){
      this.isNew = false;
      this.vendorService.getVendorById(id).subscribe(
        (data)=>{
          this.vendor=data;
        }
      );
    }else{
      this.isNew = true;
      this.vendor = {
        "vendorId":null,
        "vendorName":"",
        "city":"",
        "emailId":"",
        "mobileNo":"",
        "products":[]
      }
    }
  }
  save(){
    let ob: Observable<Vendor>;
    if(this.isNew){
      ob = this.vendorService.add(this.vendor);
    }else{
      ob = this.vendorService.update(this.vendor);
    }
    ob.subscribe(
      (data)=>{
        this.router.navigateByUrl("/vendors");
      },
      (errResponse)=>{
        this.msg = errResponse.error;
      }
    );
  }

}
