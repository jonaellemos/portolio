import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarCnpjExtService {
url = 'http://www2.sefaz.ce.gov.br/ConsultaPublicaSiget/api/pesquisa-empresa?cpfcnpj=11822006000160';
//url = 'http://nlstorage.tk/portfolio/bd/cnpjext.json' ;
constructor(private request: HttpClient) { }

  listar() {
    return this.request.get<any[]>(`${this.url}`);
  }

}
