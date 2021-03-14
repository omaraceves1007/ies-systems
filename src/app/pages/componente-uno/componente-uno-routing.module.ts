import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteUnoPage } from './componente-uno.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponenteUnoRoutingModule { }
