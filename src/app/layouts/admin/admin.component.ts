import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthStateService } from '../../services/app-state/auth-state.service';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(protected authState: AuthStateService, private router: Router) { }

  logout() {
    const subscription = this.authState.logout().subscribe(success => {
      if (success) {
        this.router.navigate(['/auth/login'])
      } else {
        // alert error
      }

      subscription.unsubscribe()
    })
  }
}
