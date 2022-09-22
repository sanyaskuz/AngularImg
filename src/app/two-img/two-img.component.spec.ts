import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoImgComponent } from './two-img.component';

describe('TwoImgComponent', () => {
  let component: TwoImgComponent;
  let fixture: ComponentFixture<TwoImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
