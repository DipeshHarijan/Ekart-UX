import { Component, OnInit, Input } from '@angular/core';
import { VendorsComponent } from '../vendors/vendors.component';
import { Product } from '../model/product';
import { Vendor } from '../model/vendor';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input()
  public vendor: Vendor;

  constructor() { }

  ngOnInit() {
  }

}
