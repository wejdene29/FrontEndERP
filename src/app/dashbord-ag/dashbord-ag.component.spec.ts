import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordAGComponent } from './dashbord-ag.component';

describe('DashbordAGComponent', () => {
  let component: DashbordAGComponent;
  let fixture: ComponentFixture<DashbordAGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordAGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordAGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
