import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneImgComponent } from './one-img.component';

describe('OneImgComponent', () => {
  let component: OneImgComponent;
  let fixture: ComponentFixture<OneImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
