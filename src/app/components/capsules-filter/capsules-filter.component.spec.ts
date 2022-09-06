import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulesFilterComponent } from './capsules-filter.component';

describe('CapsulesFilterComponent', () => {
  let component: CapsulesFilterComponent;
  let fixture: ComponentFixture<CapsulesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsulesFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsulesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
