import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeImgComponent } from './three-img.component';

describe('ThreeImgComponent', () => {
  let component: ThreeImgComponent;
  let fixture: ComponentFixture<ThreeImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
