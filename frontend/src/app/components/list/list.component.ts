import { Component, OnInit } from '@angular/core';
import { Pending } from '../../models/pending.model';
import { PendingService } from '../../services/pending.service';
import { Global } from '../../services/global.service';
import { response } from 'express';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [PendingService]
})
export class ListComponent implements OnInit {

  public pendings: Pending[] | undefined;

  constructor(
    private _pendingService: PendingService
  ) {

  }

  ngOnInit(): void {
    this.getPendings();
  }

  // Metodo para listar proyectos
  getPendings() {
    this._pendingService.getPendings().subscribe(
      response => {
        if (response.pendings) {
          this.pendings = response.pendings;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  // Metodo para borrar proyecto
  deletePending(id: string) {
    this._pendingService.deletePending(id).subscribe(
      response => {
        if (this.pendings) {
          this.pendings = this.pendings.filter(p => p._id !== id);
        }
        console.log('Pendiente eliminado correctamente');
      },
      error => {
        console.error('Error al eliminar el pendiente:', error);
      }
    );
  }


}