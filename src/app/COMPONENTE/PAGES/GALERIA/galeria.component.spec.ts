import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GALERIAComponent } from './galeria.component';

describe('GALERIAComponent', () => {
  let component: GALERIAComponent;
  let fixture: ComponentFixture<GALERIAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GALERIAComponent]
    });
    fixture = TestBed.createComponent(GALERIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
