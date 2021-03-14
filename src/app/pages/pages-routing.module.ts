import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificaUserGuard } from '../guard/verifica-user.guard';

const routes: Routes = [
  { path: 'dashboard',
    canActivate: [ VerificaUserGuard ],
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule )
  },
  { path: 'componenteUno',
    canActivate: [ VerificaUserGuard ],
    loadChildren: () => import('./componente-uno/componente-uno.module').then( m => m.ComponenteUnoModule )
  },
  // { path: '**', redirectTo: 'app/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
//
