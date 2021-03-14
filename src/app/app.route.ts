import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
    { path: 'login',
      loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule )
    },
    {
        path: 'app',
        component: PagesComponent,
        canActivate: [ LoginGuard ],
        loadChildren: './pages/pages.module#PagesModule'
    },
    {path: '**', redirectTo:'login', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
