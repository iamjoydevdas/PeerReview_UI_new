import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModuleComponent } from './common-module/login-module/login-module.component';
import { PeerDashboardManagementComponent } from './admin-module/peer-dasboard-management/peer-dashboard-management.component';
import { NewPeerManagementComponent } from './admin-module/new-peer-management/new-peer-management.component';
import { ExistingPeerManagementComponent } from './admin-module/existing-peer-management/existing-peer-management.component';
import { DesktopComponent } from './manager-module/desktop/desktop.component';
import { ChartComponent } from './manager-module/chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginModuleComponent },
  {
    path: 'dashboard', component: PeerDashboardManagementComponent, children: [
      { path: 'admin/view', component: ExistingPeerManagementComponent },
      { path: 'admin/add', component: NewPeerManagementComponent }
    ]
  },
  { path: 'manager', component: DesktopComponent, children: [
    { path: 'rate/:type', component: ChartComponent },
    { path: 'grid', component: NewPeerManagementComponent }
  ]}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
