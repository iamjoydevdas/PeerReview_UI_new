import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-peer-management',
  templateUrl: './peer-management.component.html',
  styleUrls: ['./peer-management.component.css'],
  providers:[NgbAccordionConfig]
})
export class PeerDashboardManagementComponent implements OnInit {

  constructor(private config: NgbAccordionConfig) { 
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {
  }

}
