import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlaylistStateService } from '../../../services/app-state/playlist-state.service';

@Component({
  selector: 'app-create-playlist-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './create-playlist-modal.component.html',
  styleUrl: './create-playlist-modal.component.scss'
})
export class CreatePlaylistModalComponent {

  playlistForm!: FormGroup;
  @Output() onClose: EventEmitter<void> = new EventEmitter()

  constructor(private fb: FormBuilder, private playlistState: PlaylistStateService) { }

  ngOnInit(): void {
    this.playlistForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  continuePressed() {
    this.submit()
  }
  cancelPressed() {
    this.onClose.emit()
  }


submit(): void {
  if (this.playlistForm.valid) {
    const { name, description } = this.playlistForm.value;

    this.playlistState.createPlaylist(name, description).subscribe(success => {
      if (success) {
        this.playlistForm.reset();
        this.cancelPressed(); 
      } else {
        // Optionally show error toast
      }
    });
  } else {
    this.playlistForm.markAllAsTouched();
  }
}


}
