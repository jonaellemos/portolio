import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarCnpjService {

url = 'http://nlstorage.tk/portfolio/bd/cnpj.json';

constructor(private request: HttpClient) { }

  listar() {
    return this.request.get<any[]>(`${this.url}`);
  }

}
