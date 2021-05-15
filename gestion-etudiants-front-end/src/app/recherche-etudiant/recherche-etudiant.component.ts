import { Component, OnInit } from '@angular/core';
import {EtudiantsService} from '../services/etudiants.service';
import { Etudiant} from '../Model/etudiant';

@Component({
  selector: 'app-recherche-etudiant',
  templateUrl: './recherche-etudiant.component.html',
  styleUrls: ['./recherche-etudiant.component.css']
})
export class RechercheEtudiantComponent implements OnInit {

  etudiants: any;
  currentEtudiant = null;
  currentIndex = -1;
  nom = '';
  students : Etudiant[] ;

  constructor(private etudiantService: EtudiantsService) { }

  ngOnInit(): void {
  }
  retrieveEtudiants(): void {
    this.etudiantService.getAll()
      .subscribe(
        data => {
          this.etudiants = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEtudiants();
    this.currentEtudiant = null;
    this.currentIndex = -1;
  }

  setActiveEtudiant(etudiant, index): void {
    this.currentEtudiant = etudiant;
    this.currentIndex = index;
  }

  removeAllEtudiants(): void {
    this.etudiantService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNom(): void {
    this.etudiantService.findByNom(this.nom)
      .subscribe(
        data => {
          this.etudiants= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  /*getStudentList(){
    this.etudiantService.getStudents().subscribe(data => {
    this.students = data ;
    console.log(this.students);

  });
}*/
}
