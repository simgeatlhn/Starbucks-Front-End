import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazaComponent } from './magaza.component';

describe('MagazaComponent', () => {
  let component: MagazaComponent;
  let fixture: ComponentFixture<MagazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
