import { Component, EventEmitter, Output} from '@angular/core';
import { Pending } from '../../models/pending.model';
import { PendingService } from '../../services/pending.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [PendingService]
})
export class CreateComponent {
  @Output() pendingAdded = new EventEmitter<void>();
  public tittle: string;
  public pending: Pending;
  showError: boolean = false;

  constructor(
    private _pendingService: PendingService
  ) {
    this.tittle = "Create new pending";
    this.pending = new Pending('', '', false);
  }


  onSubmit(form: Form) {
    if (!this.pending.name.trim()) return;

    this._pendingService.savePending(this.pending).subscribe({
      next: () => {
        this.pendingAdded.emit(); // 👈 Avisamos al padre (HOME)
        this.pending.name = '';
      },
      error: err => console.error(err)
    });
  }
}