import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { ListarContatosService } from './listar-contatos.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListarCnpjComponent } from './listar-cnpj/listar-cnpj.component';
import { ListarCnpjExtComponent } from './listar-cnpj-ext/listar-cnpj-ext.component';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarContatosComponent,
    ListarCnpjComponent,
    ListarCnpjExtComponent,
    ConsultaCepComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ListarContatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
