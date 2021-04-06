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
    { path: 'cars/brand/all',       component: CarComponent },
    { path: 'cars/brand/:brandId',  component: CarComponent },
    { path: 'cars/color/all',       component: CarComponent },
    { path: 'cars/color/:colorId',  component: CarComponent },
    { path: 'cars/car/:carId',      component: CarDetailComponent },
    { path: 'brands',               component: BrandComponent },
    { path: 'colors',               component: ColorComponent },
    { path: 'rentals',              component: RentalComponent },
    { path: 'customers',            component: CustomerComponent },
    { path: 'dashboard',            component: DashboardComponent },
    { path: 'user-profile',         component: UserProfileComponent },
    { path: 'table-list',           component: TableListComponent },
    { path: 'typography',           component: TypographyComponent },
    { path: 'icons',                component: IconsComponent },
    { path: 'maps',                 component: MapsComponent },
    { path: 'notifications',        component: NotificationsComponent },
    { path: 'upgrade',              component: UpgradeComponent },
];
