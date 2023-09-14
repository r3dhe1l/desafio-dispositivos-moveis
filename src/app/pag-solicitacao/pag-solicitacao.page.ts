import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solicitacao } from 'src/model/estruturas';

@Component({
  selector: 'app-pag-solicitacao',
  templateUrl: './pag-solicitacao.page.html',
  styleUrls: ['./pag-solicitacao.page.scss'],
})
export class PagSolicitacaoPage {

  pedido: Solicitacao;

  constructor(private route: ActivatedRoute) {
    this.pedido = new Solicitacao();
    this.route.params.subscribe(params => { this.pedido.tipoServico = params['tipoServ'] }); //Recuperar a informação de qual serviço foi selecionado
  }

  enviarSolicitacao() {
    this.pedido.dataSolicitacao = new Date();
    console.log('deu certo', this.pedido.protocolo, this.pedido.tipoServico, this.pedido.detalhes, this.pedido.cep, this.pedido.endereco, this.pedido.numero, this.pedido.pontoReferencia, this.pedido.dataSolicitacao);
  }
}
