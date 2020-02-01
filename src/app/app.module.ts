import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { ListarContatosService } from './listar-contatos.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListarCnpjComponent } from './listar-cnpj/listar-cnpj.component';
import { ListarCnpjExtComponent } from './listar-cnpj-ext/listar-cnpj-ext.component';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';
import { AgendaVirtualComponent } from './agenda-virtual/agenda-virtual.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarContatosComponent,
    ListarCnpjComponent,
    ListarCnpjExtComponent,
    ConsultaCepComponent,
    AgendaVirtualComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [ListarContatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
