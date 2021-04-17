import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ColorComponent } from 'app/components/colors/color/color.component';
import { BrandComponent } from 'app/components/brands/brand/brand.component';
import { RentalComponent } from 'app/components/rentals/rental/rental.component';
import { CustomerComponent } from 'app/components/users/customer/customer.component';
import { CarComponent } from 'app/components/cars/car/car.component';
import { CarDetailComponent } from 'app/components/cars/car-detail/car-detail.component';
import { PaymentComponent } from 'app/components/Payments/payment/payment.component';
import { PaymentSuccessComponent } from 'app/components/Payments/payment-success/payment-success.component';
import { BrandEditComponent } from 'app/components/brands/brand-edit/brand-edit.component';
import { ColorEditComponent } from 'app/components/colors/color-edit/color-edit.component';
import { CarEditComponent } from 'app/components/cars/car-edit/car-edit.component';
import { LoginGuard } from 'app/guards/login.guard';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'cars',                 component: CarComponent },
    { path: 'cars/edit/:carId',     component: CarEditComponent, canActivate:[LoginGuard] },
    { path: 'cars/brand/all',       component: CarComponent },
    { path: 'cars/brand/:brandId',  component: CarComponent },
    { path: 'cars/color/all',       component: CarComponent },
    { path: 'cars/color/:colorId',  component: CarComponent },
    { path: 'cars/car/:carId',      component: CarDetailComponent },
    { path: 'brands',               component: BrandComponent },
    { path: 'brands/edit/:brandId', component: BrandEditComponent },
    { path: 'colors',               component: ColorComponent },
    { path: 'colors/edit/:colorId', component: ColorEditComponent },
    { path: 'rentals',              component: RentalComponent },
    { path: 'customers',            component: CustomerComponent },
    { path: 'dashboard',            component: DashboardComponent },
    { path: 'payment',              component: PaymentComponent },
    { path: 'payment/success',      component: PaymentSuccessComponent },
    { path: 'user-profile',         component: UserProfileComponent },
    { path: 'table-list',           component: TableListComponent },
    { path: 'typography',           component: TypographyComponent },
    { path: 'icons',                component: IconsComponent },
    { path: 'maps',                 component: MapsComponent },
    { path: 'notifications',        component: NotificationsComponent },
    { path: 'upgrade',              component: UpgradeComponent }
];
