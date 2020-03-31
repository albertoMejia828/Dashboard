import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartComponent } from './chart/chart.component';


const pagesRoutes: Routes = [
    { path: '', component: PrincipalComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent},
        { path: 'progress', component: ProgressComponent},
        { path: 'chart', component: ChartComponent},
        { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
    ] }
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);