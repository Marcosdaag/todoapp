import { Component, OnInit } from '@angular/core';
import { Pending } from '../../models/pending.model';
import { PendingService } from '../../services/pending.service';
import { Global } from '../../services/global.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [PendingService]
})
export class ListComponent implements OnInit{

    public pendings: Pending[] | undefined;

    constructor(
      private _pendingService: PendingService
    ){

    }

    ngOnInit(): void {
      this.getPendings();
    }

    getPendings(){
      this._pendingService.getPendings().subscribe(
        response =>{
          if(response.pendings){
            this.pendings = response.pendings;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
}
