import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KahveComponent } from './kahve.component';

describe('KahveComponent', () => {
  let component: KahveComponent;
  let fixture: ComponentFixture<KahveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KahveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KahveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
