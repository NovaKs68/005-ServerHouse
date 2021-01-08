import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuViewComponent } from "./pages/menu-view/menu-view.component";
import {ConnexionViewComponent} from "./pages/connexion-view/connexion-view.component";

const routes: Routes = [
  { path: 'menu', component: MenuViewComponent },
  { path: 'connexion', component: ConnexionViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
