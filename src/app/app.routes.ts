import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ClientComponent } from './layouts/client/client.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/app"
    },
    {
        path: "app",
        component: ClientComponent
    },
    {
        path: "admin",
        loadComponent: () => import('./layouts/admin/admin.component').then(c => c.AdminComponent),
        children: [
            {

            }
        ]

    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
