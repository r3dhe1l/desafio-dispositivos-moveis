import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagSolicitacaoPageRoutingModule } from './pag-solicitacao-routing.module';

import { PagSolicitacaoPage } from './pag-solicitacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagSolicitacaoPageRoutingModule
  ],
  declarations: [PagSolicitacaoPage]
})
export class PagSolicitacaoPageModule {}
