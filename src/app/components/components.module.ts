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
import { FilterPipePipe } from 'app/pipes/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { VatAddedPipe } from 'app/pipes/vat-added.pipe';

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
    FilterPipePipe,
    VatAddedPipe
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
