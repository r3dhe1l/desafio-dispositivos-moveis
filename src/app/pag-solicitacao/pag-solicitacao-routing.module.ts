import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagSolicitacaoPage } from './pag-solicitacao.page';

const routes: Routes = [
  {
    path: '',
    component: PagSolicitacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagSolicitacaoPageRoutingModule {}
