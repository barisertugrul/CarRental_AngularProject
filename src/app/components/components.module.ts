import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrandComponent } from './brand/brand.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CarComponent } from './cars/car/car.component';
import { ColorComponent } from './color/color.component';
import { ColorListComponent } from './color-list/color-list.component';
import { CustomerComponent } from './customer/customer.component';
import { RentalComponent } from './rental/rental.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { FilterCarPipe } from 'app/pipes/filter-car.pipe';
import { FormsModule } from '@angular/forms';
import { VatAddedPipe } from 'app/pipes/vat-added.pipe';
import { CarAddComponent } from './cars/car-add/car-add.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterBrandPipe } from 'app/pipes/filter-brand.pipe';
import { FilterColorPipe } from 'app/pipes/filter-color.pipe';
import { BrandColorFilterComponent } from './brand-color-filter/brand-color-filter.component';

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
    BrandColorFilterComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
