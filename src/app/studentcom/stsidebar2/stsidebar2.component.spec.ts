import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stsidebar2Component } from './stsidebar2.component';

describe('Stsidebar2Component', () => {
  let component: Stsidebar2Component;
  let fixture: ComponentFixture<Stsidebar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stsidebar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stsidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
