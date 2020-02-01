import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarContatosService {

  url = 'http://nlstorage.tk/portfolio/bd/contatos.json';

  constructor(private resquest: HttpClient) { }

  listar() {
    return this.resquest.get<any[]>(`${this.url}`);
  }
}
