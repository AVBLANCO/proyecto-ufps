import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuLateralComponent } from './Componentes/menu-lateral/menu-lateral.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { RegistroProyectoComponent } from './Componentes/registro-proyecto/registro-proyecto.component';
import { SeguimientoProyectoComponent } from './Componentes/seguimiento-proyecto/seguimiento-proyecto.component';
import { CronogramaProyectoComponent } from './Componentes/cronograma-proyecto/cronograma-proyecto.component';
import { PresupuestoProyectoComponent } from './Componentes/presupuesto-proyecto/presupuesto-proyecto.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { NavMenuComponent } from './Componentes/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    NavBarComponent,
    RegistroProyectoComponent,
    SeguimientoProyectoComponent,
    CronogramaProyectoComponent,
    PresupuestoProyectoComponent,
    FooterComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
