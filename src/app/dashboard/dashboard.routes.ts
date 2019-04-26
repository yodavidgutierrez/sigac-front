import { Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio/inicio.component';
import { RegistroComponent } from '../registro/registro/registro.component';
import { InformacionComponent } from '../informacion/informacion/informacion.component';



export const dashboardRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'informacion', component: InformacionComponent},

];
