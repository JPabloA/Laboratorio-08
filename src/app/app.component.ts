import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina de heroes';
  // numero = 78123.95;
  // fecha = new Date();
  // jsonObj = {
  //   id: "1",
  //   nombre: "Maria",
  //   apellido: "Vargas"
  // }
}
