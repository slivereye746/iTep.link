import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaycvComponent } from './raycv.component';

describe('RaycvComponent', () => {
  let component: RaycvComponent;
  let fixture: ComponentFixture<RaycvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaycvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaycvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
