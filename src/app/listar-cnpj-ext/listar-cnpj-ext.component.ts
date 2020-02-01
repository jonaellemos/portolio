import { ListarCnpjExtService } from './../listar-cnpj-ext.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cnpj-ext',
  templateUrl: './listar-cnpj-ext.component.html',
  styleUrls: ['./listar-cnpj-ext.component.css']
})
export class ListarCnpjExtComponent implements OnInit {

  //  listacnpjext = [
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
  //     "enderecos": [{
  //         "tipoEndereco": "Comercial",
  //         "tipoLogradouro": " ",
  //         "numero": "00832",
  //         "complemento": null,
  //         "bairro": "CENTRO",
  //         "municipio": "JUAZEIRO DO NORTE",
  //         "uf": "CE",
  //         "cep": "630100",
  //         "pais": "BRASIL",
  //         "dtInicio": null,
  //         "dtFim": null
  //     }],
  //     "cnaes": [{
  //         "codigo": 4771701,
  //         "descricao": "Comércio varejista de produtos farmacêuticos, sem manipulação de fórmulas\t\t\t\t\t"
  //     }, {
  //         "codigo": 4772500,
  //         "descricao": "Comércio varejista de cosméticos, produtos de perfumaria e de higiene pessoal\t\t\t\t\t"
  //     }, {
  //         "codigo": 4771701,
  //         "descricao": "Comércio varejista de produtos farmacêuticos, sem manipulação de fórmulas\t\t\t\t\t"
  //     }, {
  //         "codigo": 4729699,
  //         "descricao": "Comércio varejista de produtos alimentícios em geral ou especializado em produtos alimentícios não especificados anteriormente\t\t\t\t\t"
  //     }],
  //     "dtObrigatoriedadeNFe": "2014-09-01"
  // }];

  listacnpjext: Array<any>;

  constructor(private listarcnpjext: ListarCnpjExtService){ }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listarcnpjext.listar().subscribe(dados => this.listacnpjext = [dados]);
  }

}
