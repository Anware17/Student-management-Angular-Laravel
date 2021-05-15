import { Component, OnInit } from '@angular/core';
import {EtudiantsService} from '../services/etudiants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-etudiants',
  templateUrl: './details-etudiants.component.html',
  styleUrls: ['./details-etudiants.component.css']
})
export class DetailsEtudiantsComponent implements OnInit {
  currentEtudiant = null;
  message = '';

  constructor(
    private etudiantService: EtudiantsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  
  this.message = '';
  this.getEtudiant(this.route.snapshot.paramMap.get('id'));}

  getEtudiant(id): void {
    this.etudiantService.get(id)
      .subscribe(
        data => {
          this.currentEtudiant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  updateEtudiant(): void {
    this.etudiantService.update(this.currentEtudiant.id, this.currentEtudiant)
      .subscribe(
        response => {
          console.log(response);
          this.message = ' Etudiant a été mis à jour avec succès!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEtudiant(): void {
    this.etudiantService.delete(this.currentEtudiant.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/etudiants']);
        },
        error => {
          console.log(error);
        });
  }
  onCancel(){
    this.router.navigate(["../"],{relativeTo: this.route});
  }

}
