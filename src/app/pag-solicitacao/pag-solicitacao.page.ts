import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitacao } from 'src/model/estruturas';
import { ToastController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-pag-solicitacao',
  templateUrl: './pag-solicitacao.page.html',
  styleUrls: ['./pag-solicitacao.page.scss'],
})
export class PagSolicitacaoPage {

  pedido: Solicitacao;

  constructor(private route: ActivatedRoute, private router: Router, private toastController: ToastController, public photoService: PhotoService) {
    this.pedido = new Solicitacao();
    this.route.params.subscribe(params => {
      this.pedido.tipoServico = params['tipoServ'];
    });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async enviarSolicitacao() {
    this.pedido.dataSolicitacao = new Date();
    console.log('deu certo', this.pedido.protocolo, this.pedido.tipoServico, this.pedido.detalhes, this.pedido.cep, this.pedido.endereco, this.pedido.numero, this.pedido.pontoReferencia, this.pedido.dataSolicitacao);

    const toast = await this.toastController.create({
      message: 'Solicitação Enviada',
      duration: 5000,
      position: 'middle',
      cssClass: 'custom-toast',
    });
    toast.present();

    this.router.navigate(['/tabs/tab1']);
  }
}
