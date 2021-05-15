import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEtudiantComponent } from './recherche-etudiant.component';

describe('RechercheEtudiantComponent', () => {
  let component: RechercheEtudiantComponent;
  let fixture: ComponentFixture<RechercheEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
