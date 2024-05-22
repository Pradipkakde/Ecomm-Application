import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authenticationGuard } from './authentication.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent,
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[authenticationGuard]
  },
  {
    component:SellerAddProductComponent,
    path:'seller-add-product',
    canActivate:[authenticationGuard]
  },
  {
  component:SellerUpdateProductComponent,
  path:'seller-update-product/:id',
  canActivate:[authenticationGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
