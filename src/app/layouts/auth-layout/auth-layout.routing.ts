import { Routes } from '@angular/router';
import { CarComponent } from 'app/components/cars/car/car.component';
import { LoginComponent } from 'app/components/login/login.component';

export const AuthLayoutRoutes:Routes = [
    { path: 'login',                component: LoginComponent },
    { path: 'cars',                 component: CarComponent },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AuthLayoutRoutingModule { }
