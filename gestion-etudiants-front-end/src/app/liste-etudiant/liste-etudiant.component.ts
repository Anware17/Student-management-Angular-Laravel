import { Component, OnInit } from '@angular/core';
import {EtudiantsService} from '../services/etudiants.service';
import { Etudiant} from '../Model/etudiant';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {
  students : Etudiant[] ;

  constructor(private etudiantService: EtudiantsService) { }

  ngOnInit(): void {
    this.getStudentList();
  }
  

 
  
  getStudentList(){
    this.etudiantService.getAll().subscribe(data => {
    this.students = data ;
    console.log(this.students)        },
    error => {
      console.log(error);
    });


}


}
