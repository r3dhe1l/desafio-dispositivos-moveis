import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitacao } from 'src/model/estruturas';
import { ToastController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-pag-solicitacao',
  templateUrl: './pag-solicitacao.page.html',
  styleUrls: ['./pag-solicitacao.page.scss'],
})
export class PagSolicitacaoPage {

  pedido: Solicitacao;

  constructor(private route: ActivatedRoute, private router: Router, private toastController: ToastController, public photoService: PhotoService, public geoService: GeolocationService) {
    this.pedido = new Solicitacao();
    this.route.params.subscribe(params => {
      this.pedido.tipoServico = params['tipoServ'];
    });
  }

  tirarFoto() {
    this.photoService.addNewToGallery();
  }

  async pegarGeolocalizacao() {
    const endereco = await this.geoService.takeGeolocation();
    this.pedido.cep = endereco[0];
    this.pedido.logradouro = endereco[1];
    this.pedido.numero = endereco[2];
  }

  async enviarSolicitacao() {
    this.pedido.dataSolicitacao = new Date();
    console.log('deu certo', this.pedido.protocolo, this.pedido.tipoServico, this.pedido.detalhes, this.pedido.cep, this.pedido.logradouro, this.pedido.numero, this.pedido.pontoReferencia, this.pedido.dataSolicitacao);

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
