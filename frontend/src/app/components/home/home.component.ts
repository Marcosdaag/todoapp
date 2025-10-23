import { Component, ViewChild } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild(ListComponent) listComponent!: ListComponent;

  // Metodo que se llama al agregar un nuevo pendiente para actualizar la lista
  refreshList() {
    if (this.listComponent) {
      this.listComponent.getPendings(); // vuelve a cargar la lista
    }
  }
}
