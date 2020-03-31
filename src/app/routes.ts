import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { ChartComponent } from './pages/chart/chart.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true} );