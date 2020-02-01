import { Component, OnInit } from '@angular/core';
import { ListarCnpjService } from '../listar-cnpj.service';

@Component({
  selector: 'app-listar-cnpj',
  templateUrl: './listar-cnpj.component.html',
  styleUrls: ['./listar-cnpj.component.css']
})
export class ListarCnpjComponent implements OnInit {

  // listacnpj = [
  //   {
  //     "cdEmpresa": 11822006000160,
  //     "cnpj": 11822006000160,
  //     "nrIe": "63961997",
  //     "razaoSocial": "FARMACIA DO TRABALHADOR DO BRASIL CEARA LTDA",
  //     "nomeFantasia": "FARMACIA DO TRABALHADOR",
  //     "tipoRecolhimento": "NORMAL",
  //     "situacaoCadastral": "ATIVO",
  //     "isNfe": true,
  //     "isEFD": true,
  //     "dtInicio": "2010-04-29",
  //     "dtPrimeiraNFe": null,
  //     "dtObrigatoriedadeEFD": "2012-01-01",
  //     "enderecos": "Rua Fulano de Tal"
  // }];

  listacnpj: Array<any>;

  constructor(private listarcnpj: ListarCnpjService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listarcnpj.listar().subscribe(dados => this.listacnpj = dados);
  }

}
