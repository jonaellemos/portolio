import { Component, OnInit } from '@angular/core';
import { ListarContatosService } from '../listar-contatos.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.css']
})
export class ListarContatosComponent implements OnInit {

// lista=[
//   {"id":1, "nome":"Jonael Lemos", "email":"jonaellemos@hotmail.com"},
//   {"id":2, "nome":"Ana Paula Lemos", "email":"anacp@gmail.com"},
//   {"id":3, "nome":"Geovanne Santos", "email":"geotrocador@gmail.com"},
// ];

lista: Array<any>;

  constructor(private listarcontatos: ListarContatosService ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listarcontatos.listar().subscribe(dados => this.lista = dados);
  }

}
