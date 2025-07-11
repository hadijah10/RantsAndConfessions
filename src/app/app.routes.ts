import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ClientComponent } from './layouts/client/client.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { adminAuthGuardGuard } from './guards/admin-auth-guard.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PlaylistComponent } from './pages/admin/playlist/playlist.component';
import { EpisodeComponent } from './pages/admin/episode/episode.component';
import { ConfessionsComponent } from './pages/admin/confessions/confessions.component';
import { ConfessionpageComponent } from './pages/client/confessionpage/confessionpage.component';
import { EpisodesComponent } from './pages/client/episodes/episodes.component';
import { EpisodedetailsComponent } from './pages/client/episodedetails/episodedetails/episodedetails.component';

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
            },
            {
                path:'confessions',
                component:ConfessionpageComponent
            },
            {
                path:'episodes',
                component: EpisodesComponent,
            },
            {
                path:'episodes/:id',
                component: EpisodedetailsComponent
            }
        ]
    },
    {
        path: "admin",
        loadComponent: () => import('./layouts/admin/admin.component').then(c => c.AdminComponent),
        canActivate: [adminAuthGuardGuard],
        children: [
                {
                    path:"",
                    component:DashboardComponent,
                    pathMatch:"full"
                },
                {
                    path:"playlist",
                    component:PlaylistComponent,
                },
                {
                    path:"episodes",
                    component:EpisodeComponent,
                },
                {
                    path:"confession",
                    component:ConfessionsComponent,
                },
        ]

    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
