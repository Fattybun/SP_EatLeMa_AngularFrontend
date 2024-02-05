import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelConfComponent } from './wheel-conf.component';

describe('WheelConfComponent', () => {
  let component: WheelConfComponent;
  let fixture: ComponentFixture<WheelConfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WheelConfComponent]
    });
    fixture = TestBed.createComponent(WheelConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
