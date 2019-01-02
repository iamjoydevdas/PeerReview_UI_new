import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeerManagementComponent } from './new-peer-management.component';

describe('NewPeerManagementComponent', () => {
  let component: NewPeerManagementComponent;
  let fixture: ComponentFixture<NewPeerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPeerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
