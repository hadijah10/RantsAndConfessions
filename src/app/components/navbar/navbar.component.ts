import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PlaylistStateService } from '../../services/app-state/playlist-state.service';
import { AuthStateService } from '../../services/app-state/auth-state.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

   isMenuOpen = false;
   constructor(protected authStateService:AuthStateService){}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
