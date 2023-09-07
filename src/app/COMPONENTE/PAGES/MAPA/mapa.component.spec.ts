import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAPAComponent } from './mapa.component';

describe('MAPAComponent', () => {
  let component: MAPAComponent;
  let fixture: ComponentFixture<MAPAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MAPAComponent]
    });
    fixture = TestBed.createComponent(MAPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
