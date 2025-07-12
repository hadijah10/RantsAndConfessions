import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlaylistStateService } from '../../../services/app-state/playlist-state.service';
import { IPlaylist, IPlaylistListApiResponse, IPlaylistResponseData } from '../../../model/playlistdata.interface';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from '../../../components/admin/delete-modal/delete-modal.component';
import { CreatePlaylistModalComponent } from '../../../components/admin/create-playlist-modal/create-playlist-modal.component';
import { PaginationComponent } from '../../../components/admin/pagination/pagination.component';

@Component({
  selector: 'app-playlist',
  imports: [CommonModule, DeleteModalComponent, CreatePlaylistModalComponent, PaginationComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent implements OnInit, OnDestroy {

  protected playlist: IPlaylistResponseData | null = null;
  subscription: Subscription = new Subscription()
  selectedPlaylist: IPlaylist | null = null;
  isDelete: boolean = false;
  isCreate: boolean = false


  constructor(private playlistState: PlaylistStateService) {
    this.subscription = this.playlistState.playlist$.subscribe({
      next: (value) => {
        this.playlist = value
      },
    })
  }

    next() {
   
  }
  prev() {
   
  }

  get totalPage(): number {
    if (!this.playlist) return 1;
    return Math.ceil(this.playlist.total / this.playlist.per_page);
  }

  toggleCreate() {
    this.isCreate = !this.isCreate;
  }

  onDelete(playlist: IPlaylist) {
    this.isDelete = true;
    this.selectedPlaylist = playlist;
  }

  onCancel() {
    this.selectedPlaylist = null;
    this.isDelete = false;
  }

  ngOnInit(): void {
    this.playlistState.getPlaylist()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
