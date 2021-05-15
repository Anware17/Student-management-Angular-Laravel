import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionEtudiants';
  constructor(private toastr : ToastrService) {
   // this.showSuccess();

  }

  showSuccess(){
    this.toastr.success('Hello world!', 'Toastr fun !');
  }
}
