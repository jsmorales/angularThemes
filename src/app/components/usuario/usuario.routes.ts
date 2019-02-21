import { Routes } from '@angular/router';

import {UsuarioNuevoComponent} from './usuario-nuevo.component';
import {UsuarioEditarComponent} from './usuario-editar.component';
import {UsuarioDetalleComponent} from './usuario-detalle.component';
// se importan los componentes

// se exporta el arreglo de rutas normal
export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent},
  { path: 'edit', component: UsuarioEditarComponent},
  { path: 'detail', component: UsuarioDetalleComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'nuevo'} // ruta por defecto del children
];
