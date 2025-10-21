import { Component } from '@angular/core';
import { Pending } from '../../models/pending.model';
import { PendingService } from '../../services/pending.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [PendingService]
})
export class CreateComponent {
  public tittle: string;
  public pending: Pending;
  showError: boolean = false;

  constructor(
    private _pendingService: PendingService
  ) {
    this.tittle = "Create new pending";
    this.pending = new Pending('', '', false);
  }


  onSubmit(formulario: NgForm) {
    // Si el formulario no le da un valor a name no puede ser enviado
    if (!this.pending.name) {
      return;
    }
    
    // Primer letra el del pending en mayuscula
    this.pending.name = this.pending.name.charAt(0).toUpperCase() + this.pending.name.slice(1);

    // Hace un create del pending, llamando al meotodo save pending que esta en el servicio y resetea tanto el formulario como el nombre del pendiente por default
    this._pendingService.savePending(this.pending).subscribe(
      response => {
        console.log(response);
        formulario.reset();
        this.pending.name = '';
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}