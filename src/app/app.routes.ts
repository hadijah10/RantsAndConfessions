import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ClientComponent } from './layouts/client/client.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "app"
    },
    {
        path: "auth",
        component: AuthLayoutComponent,
        children: [
            {
                path: "",
                redirectTo: "/auth/login",
                pathMatch: "full"
            },
            {
                path: "login",
                loadComponent: () => import('./pages/auth/loginpage/loginpage.component').then(c => c.LoginpageComponent)
            },
            {
                path: "signup",
                loadComponent: () => import('./pages/auth/signuppage/signuppage.component').then(c => c.SignuppageComponent)
            },
        ]
    },
    {
        path: "app",
        component: ClientComponent,
        children: [
            {
                path: "",
                component: HomepageComponent,
            }
        ]
    },
    {
        path: "admin",
        loadComponent: () => import('./layouts/admin/admin.component').then(c => c.AdminComponent),
        children: [

        ]

    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
