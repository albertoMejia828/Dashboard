import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartComponent } from './chart/chart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
declarations: [
    PrincipalComponent,
    DashboardComponent,
    ProgressComponent,
    ChartComponent,
],
exports: [
    DashboardComponent,
    ProgressComponent,
    ChartComponent,
    PrincipalComponent,
],
imports: [
    SharedModule,
    PAGES_ROUTES
],
providers: [],

})

export class PagesModule { }