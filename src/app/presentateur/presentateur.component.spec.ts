import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentateurComponent } from './presentateur.component';

describe('PresentateurComponent', () => {
  let component: PresentateurComponent;
  let fixture: ComponentFixture<PresentateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
