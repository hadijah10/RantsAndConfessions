import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlaylist } from '../../../model/playlistdata.interface';
import { PlaylistStateService } from '../../../services/app-state/playlist-state.service';

@Component({
  selector: 'app-delete-modal',
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss'
})
export class DeleteModalComponent {
  @Input() playlist!: IPlaylist | null;
  @Output() onClose = new EventEmitter<void>();


  constructor(private playlistState: PlaylistStateService) { }


  cancelPressed() {
    this.onClose.emit()
  }

  continuePressed() {
    if (!this.playlist) return;
    this.playlistState.deletePlaylist(this.playlist?.id)
    this.cancelPressed()
  }
}
