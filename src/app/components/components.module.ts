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
import { FormsModule } from '@angular/forms';
import { VatAddedPipe } from 'app/pipes/vat-added.pipe';
import { CarAddComponent } from './cars/car-add/car-add.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterBrandPipe } from 'app/pipes/filter-brand.pipe';
import { FilterColorPipe } from 'app/pipes/filter-color.pipe';
import { BrandColorFilterComponent } from './brands/brand-color-filter/brand-color-filter.component';
import { RentalInCarDetailComponent } from './rentals/rental-in-car-detail/rental-in-car-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
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
    BrandColorFilterComponent,
    RentalInCarDetailComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
