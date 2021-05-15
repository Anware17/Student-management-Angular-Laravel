import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Etudiant} from '../Model/etudiant';
const baseUrl = 'http://127.0.0.1:8000/api/etudiants';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  constructor(private http: HttpClient) { }




 getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

 /* getAll(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(baseUrl);}*/

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
      /*  create(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(baseUrl, etudiant);//.pipe(
     // tap(e => this.notifyEtudiantChanged())
    }*/ 

  update(id, data): Observable<any> {

    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {

    return this.http.delete<any>(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }

  findByNom(nom): Observable<any> {
    //return this.http.get(`${baseUrl}?nom=${nom}`);
    return this.http.get(`${baseUrl}/search/${nom}`);
  }
  getStudents() : Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(`${baseUrl}`);
    
  }
}
