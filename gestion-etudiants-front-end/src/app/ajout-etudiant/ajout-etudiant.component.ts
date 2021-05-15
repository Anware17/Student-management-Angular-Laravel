import { Component, OnInit } from '@angular/core';
import {EtudiantsService} from '../services/etudiants.service';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {
  etudiant = {
    nom: '',
    prenom: '',
    classe:  ''
  };
  submitted = false;
  constructor(private etudiantService: EtudiantsService) { }
  saveEtudiant(): void {
    const data = {
      nom: this.etudiant.nom,
      prenom: this.etudiant.prenom,
      classe: this.etudiant.classe
    };

    this.etudiantService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEtudiant(): void {
    this.submitted = false;
    this.etudiant = {
      nom: '',
      prenom: '',
      classe : ''
    };
  }
  ngOnInit(): void {
  }

}
