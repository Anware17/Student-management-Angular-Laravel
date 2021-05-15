import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEtudiantsComponent } from './details-etudiants.component';

describe('DetailsEtudiantsComponent', () => {
  let component: DetailsEtudiantsComponent;
  let fixture: ComponentFixture<DetailsEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
