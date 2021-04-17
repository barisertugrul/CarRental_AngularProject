import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrandComponent } from './brands/brand/brand.component';
import { BrandListComponent } from './brands/brand-list/brand-list.component';
import { CarComponent } from './cars/car/car.component';
import { ColorComponent } from './colors/color/color.component';
import { ColorListComponent } from './colors/color-list/color-list.component';
import { CustomerComponent } from './users/customer/customer.component';
import { RentalComponent } from './rentals/rental/rental.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { FilterCarPipe } from 'app/pipes/filter-car.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VatAddedPipe } from 'app/pipes/vat-added.pipe';
import { CarAddComponent } from './cars/car-add/car-add.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterBrandPipe } from 'app/pipes/filter-brand.pipe';
import { FilterColorPipe } from 'app/pipes/filter-color.pipe';
import { RentalInCarDetailComponent } from './rentals/rental-in-car-detail/rental-in-car-detail.component';
import { NgbdDatepickerRangeComponent } from './ngbd-datepicker-range/ngbd-datepicker-range.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerRangePopupComponent } from './ngbd-datepicker-range-popup/ngbd-datepicker-range-popup.component';
import { PaymentComponent } from './Payments/payment/payment.component';
import { PaymentSuccessComponent } from './Payments/payment-success/payment-success.component';
import { BrandEditComponent } from './brands/brand-edit/brand-edit.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ColorEditComponent } from './colors/color-edit/color-edit.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/interceptors/auth.interceptor';
//import { ClickOutsideDirective } from 'app/directives/click-outside.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    BrandComponent,
    BrandListComponent,
    CarComponent,
    ColorComponent,
    ColorListComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailComponent,
    FilterCarPipe,
    FilterBrandPipe,
    FilterColorPipe,
    VatAddedPipe,
    CarAddComponent,
    SearchBarComponent,
    RentalInCarDetailComponent,
    NgbdDatepickerRangeComponent,
    NgbdDatepickerRangePopupComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    BrandEditComponent,
    ModalConfirmComponent,
    ColorEditComponent,
    CarEditComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ]
})
export class ComponentsModule { }
