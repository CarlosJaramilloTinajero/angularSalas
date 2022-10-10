import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSalaComponent } from './components/add-sala/add-sala.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaSalasComponent } from './components/lista-salas/lista-salas.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  }, {
    path: 'ListaSalas',
    component: ListaSalasComponent
  }, {
    path: 'AgregarSala',
    component: AddSalaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
