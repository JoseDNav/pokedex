import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginasComponent } from './paginas/paginas.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginasComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
