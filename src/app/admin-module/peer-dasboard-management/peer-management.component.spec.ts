import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerManagementComponent } from './peer-management.component';

describe('PeerManagementComponent', () => {
  let component: PeerManagementComponent;
  let fixture: ComponentFixture<PeerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
