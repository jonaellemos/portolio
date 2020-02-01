import { NgModule } from '@angular/core';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { RouterModule, Routes } from '@angular/router';
import { ListarCnpjComponent } from './listar-cnpj/listar-cnpj.component';
import { ListarCnpjExtComponent } from './listar-cnpj-ext/listar-cnpj-ext.component';

const routes: Routes = [
  { path: 'contatos', component: ListarContatosComponent },
  { path: 'cnpjs', component: ListarCnpjComponent },
  { path: 'cnpjext', component: ListarCnpjExtComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule { }
