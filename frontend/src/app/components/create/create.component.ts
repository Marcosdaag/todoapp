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

  constructor(
    private _pendingService: PendingService
  ){
    this.tittle = "Create new pending";
    this.pending = new Pending('','New Pending',false);
  }


  onSubmit(formulario: NgForm){
    this._pendingService.savePending(this.pending).subscribe(
      response =>{
        console.log(response);
        formulario.reset();
      },
      error =>{
        console.log(<any>error)
      }
    );
  }
}