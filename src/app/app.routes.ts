import { RouterModule, Routes } from '@angular/router';
import {HttpClientComponent} from './components/http-client/http-client.component';
import {StyleClassesComponent} from './components/style-classes/style-classes.component';
import {NgSwitchComponent} from './components/ng-switch/ng-switch.component';
import {NgStyleComponent} from './components/ng-style/ng-style.component';
import {UsuarioComponent} from './components/usuario/usuario.component';

// import {UsuarioNuevoComponent} from './components/usuario/usuario-nuevo.component';
// import {UsuarioEditarComponent} from './components/usuario/usuario-editar.component';
// import {UsuarioDetalleComponent} from './components/usuario/usuario-detalle.component';
import {USUARIO_ROUTES} from './components/usuario/usuario.routes';
// se importan los componentes


const AppRoutes: Routes = [
  { path: 'home', component: HttpClientComponent},
  { path: 'stylesClasses', component: StyleClassesComponent},
  { path: 'ngSwitch', component: NgSwitchComponent},
  { path: 'ngStyle', component: NgStyleComponent},
  {
    path: 'user/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES, // rutas hijas para user, son rutas normales, se separa el archivo para que quede mejor segmentado
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'} // lo demás que no se reconoce lo manda a home de nuevo
];

export const AppRouting = RouterModule.forRoot(AppRoutes, {useHash: false}); // se usa hash para poder trabajar mejor los parametros
