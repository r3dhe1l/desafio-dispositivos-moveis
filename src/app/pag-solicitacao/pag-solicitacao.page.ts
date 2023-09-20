import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitacao } from 'src/model/estruturas';
import { ToastController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';
import { GeolocationService } from '../services/geolocation.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-pag-solicitacao',
  templateUrl: './pag-solicitacao.page.html',
  styleUrls: ['./pag-solicitacao.page.scss'],
})
export class PagSolicitacaoPage {

  pedido: Solicitacao;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController,
    public photoService: PhotoService,
    public geoService: GeolocationService,
    private database: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.pedido = new Solicitacao();
    this.route.params.subscribe(params => {
      this.pedido.tipoServico = params['tipoServ'];
    });
  }

  async tirarFoto() {
    try {
      const fotoCapturada = await this.photoService.addNewToGallery();

      if (fotoCapturada) {
        const timestamp = new Date().getTime();
        const nomeArquivo = `foto_${timestamp}.jpg`;
        const storageRef = this.storage.ref(nomeArquivo);
        const photoBlob = await fetch(fotoCapturada.webPath as RequestInfo).then(r => r.blob());
        const uploadTask = storageRef.put(photoBlob);

        await uploadTask;

        storageRef.getDownloadURL().subscribe((url) => {
          this.pedido.foto = url;
        });
      } else {
        console.error('Foto não foi capturada.');
      }
    } catch (error) {
      console.error('Erro ao tirar e enviar a foto:', error);
    }
  }



  async pegarGeolocalizacao() {
    const endereco = await this.geoService.takeGeolocation();
    this.pedido.cep = endereco[0];
    this.pedido.logradouro = endereco[1];
    this.pedido.numero = endereco[2];
  }

  async obterProtocolo(): Promise<number> {
    const contadorRef = this.database.collection('protocolos').doc('protocolos');

    try {
      const snapshot = await contadorRef.get().toPromise();

      if (snapshot && snapshot.exists) {
        const data = snapshot.data() as { contProt: number };
        return data ? data.contProt : 0;
      } else {
        console.log('O documento não existe.');
        return 0;
      }
    } catch (error) {
      console.error('Erro ao obter o valor do contador:', error);
      throw error;
    }
  }

  async incrementarProtocolo(): Promise<void> {
    const contadorRef = this.database.collection('protocolos').doc('protocolos');

    try {
      await this.database.firestore.runTransaction(async (transaction) => {
        const doc = await transaction.get(contadorRef.ref);

        if (!doc.exists) {
          throw new Error('O documento não existe.');
        }

        const data = doc.data() as { contProt: number };
        const novoValor = (data ? data.contProt : 0) + 1;

        transaction.update(contadorRef.ref, { contProt: novoValor });
      });
    } catch (error) {
      console.error('Erro ao incrementar o valor do contador:', error);
      throw error;
    }
  }

  async enviarSolicitacao() {
    try {
      try {
        const valor = await this.obterProtocolo();
        this.pedido.protocolo = valor;
        console.log('Valor do protocolo:', this.pedido.protocolo);
        await this.incrementarProtocolo();
        console.log('Valor do contador incrementado com sucesso.');
      } catch (error) {
        console.error(error);
      }

      this.pedido.dataSolicitacao = new Date();
      console.log('deu certo', this.pedido.protocolo, this.pedido.tipoServico, this.pedido.detalhes, this.pedido.foto, this.pedido.cep, this.pedido.logradouro, this.pedido.numero, this.pedido.pontoReferencia, this.pedido.dataSolicitacao);

      const toast = await this.toastController.create({
        message: 'Solicitação Enviada',
        duration: 5000,
        position: 'middle',
        cssClass: 'custom-toast',
      });
      toast.present();

      const pedidoJSON = this.pedido.toJSON();
      const documento = `protocolo_${this.pedido.protocolo}`;
      const pedidoRef = this.database.collection('pedidos').doc(documento);
      pedidoRef.set(pedidoJSON);

      this.router.navigate(['/tabs/tab1']);

    } catch (error) {
      console.error('Erro ao salvar o pedido no Firestore:', error);
    }
  }
}
