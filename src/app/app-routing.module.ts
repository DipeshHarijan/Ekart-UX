import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard/:name", component: DashboardComponent, canActivate:[RouteGuardService]},
  {path: "vendors", component: VendorsComponent, canActivate:[RouteGuardService]},
  {path: "logout", component: LogoutComponent, canActivate:[RouteGuardService]},
  {path: "add", component: VendorFormComponent, canActivate:[RouteGuardService]},
  {path: "edit/:id", component: VendorFormComponent, canActivate:[RouteGuardService]},
  {path: "products", component: ProductsComponent, canActivate:[RouteGuardService]},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
