import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayCvComponent } from './ray-cv.component';

describe('RayCvComponent', () => {
  let component: RayCvComponent;
  let fixture: ComponentFixture<RayCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
