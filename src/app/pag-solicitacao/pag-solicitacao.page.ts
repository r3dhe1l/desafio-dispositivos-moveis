import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pag-solicitacao',
  templateUrl: './pag-solicitacao.page.html',
  styleUrls: ['./pag-solicitacao.page.scss'],
})
export class PagSolicitacaoPage {

  tipoServico: string;
  detalhes: string;
  cep: number;
  endereco: string;
  numero: number;
  pontoReferencia: string;


  constructor(private route: ActivatedRoute) {
    this.tipoServico = '';
    this.route.params.subscribe(params => { this.tipoServico = params['tipoServ'] });
    this.detalhes = '';
    this.cep = 0;
    this.endereco = '';
    this.numero = 0;
    this.pontoReferencia = '';
  }
}
