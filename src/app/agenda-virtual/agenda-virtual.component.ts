import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-agenda-virtual',
  templateUrl: './agenda-virtual.component.html',
  styleUrls: ['./agenda-virtual.component.css']
})
export class AgendaVirtualComponent implements OnInit {

  lista = [
    {"nome":"Jonael", "email":"jonaellemos@hotmail.com", "telefone":85996882211},
    {"nome":"Ana", "email":"anacp@hotmail.com", "telefone":8599887766}
  ];
  
  contato: any;

  constructor() { }

  ngOnInit() {
    this.contato = {};

  }

  criar(frm: FormGroup) {
    console.log(this.contato);
    this.lista.push(this.contato);
    frm.reset();
  }

}
