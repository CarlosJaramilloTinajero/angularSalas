import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Titulo1Component } from './components/titulo1/titulo1.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { ListaSalasComponent } from './components/lista-salas/lista-salas.component';
import { Titulo2Component } from './components/titulo2/titulo2.component';
import { SalaTablaComponent } from './components/sala-tabla/sala-tabla.component';
import { AddSalaComponent } from './components/add-sala/add-sala.component';
import { FormsModule } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Titulo1Component,
    FotterComponent,
    InicioComponent,
    CardsComponent,
    CardComponent,
    ListaSalasComponent,
    Titulo2Component,
    SalaTablaComponent,
    AddSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
