import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPeerManagementComponent } from './existing-peer-management.component';

describe('ExistingPeerManagementComponent', () => {
  let component: ExistingPeerManagementComponent;
  let fixture: ComponentFixture<ExistingPeerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingPeerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPeerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
