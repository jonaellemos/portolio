import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../consulta-cep.service';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})
export class ConsultaCepComponent implements OnInit {

  consultacep: Array<any>;

  constructor(private buscacep: ConsultaCepService) { }

  ngOnInit() {
    this.consultarcep();
  }

  consultarcep() {
    console.log('Consultando dados no Correio');
    return this.buscacep.consultarcep().subscribe(dados => this.consultacep = [dados]);
  }

//teste
}
