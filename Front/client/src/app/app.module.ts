import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuViewComponent } from './pages/menu-view/menu-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionViewComponent } from './pages/connexion-view/connexion-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuViewComponent,
    ConnexionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
