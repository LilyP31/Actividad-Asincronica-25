import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { EditarPageComponent } from './menu-principal/editar-page/editar-page.component';
import { HomeComponent } from './menu-principal/home/home.component';
import { ListaUsuariosComponent } from './menu-principal/lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './menu-principal/login/login.component';
import { RegistroComponent } from './menu-principal/registro/registro.component';

const routes: Routes = [

  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, canActivate: [CanactivateGuard]},
  {path: 'actualizar/:id', component: EditarPageComponent,canActivate: [CanactivateGuard] },

  {path: 'lista', component: ListaUsuariosComponent,canActivate: [CanactivateGuard] },
  {path: 'nuevo', component: RegistroComponent,canActivate: [CanactivateGuard] },
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
