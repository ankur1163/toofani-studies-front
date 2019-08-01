import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StupperbarmainComponent } from './stupperbarmain.component';

describe('StupperbarmainComponent', () => {
  let component: StupperbarmainComponent;
  let fixture: ComponentFixture<StupperbarmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StupperbarmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StupperbarmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
