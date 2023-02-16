import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionIncidenciasComponent } from './introduccion-incidencias.component';

describe('IntroduccionIncidenciasComponent', () => {
  let component: IntroduccionIncidenciasComponent;
  let fixture: ComponentFixture<IntroduccionIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduccionIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduccionIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
