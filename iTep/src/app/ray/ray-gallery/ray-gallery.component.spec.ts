import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayGalleryComponent } from './ray-gallery.component';

describe('RayGalleryComponent', () => {
  let component: RayGalleryComponent;
  let fixture: ComponentFixture<RayGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
