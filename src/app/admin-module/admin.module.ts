import { NgModule } from '@angular/core';
import { PeerDashboardManagementComponent } from './peer-dasboard-management/peer-dashboard-management.component';
import { NewPeerManagementComponent } from './new-peer-management/new-peer-management.component';
import { ExistingPeerManagementComponent } from './existing-peer-management/existing-peer-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    PeerDashboardManagementComponent,
    NewPeerManagementComponent,
    ExistingPeerManagementComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  exports:[
    PeerDashboardManagementComponent,
    NewPeerManagementComponent,
    ExistingPeerManagementComponent
  ]
})
export class AdminModule { }