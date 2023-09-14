import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagSolicitacaoPage } from './pag-solicitacao.page';

describe('PagSolicitacaoPage', () => {
  let component: PagSolicitacaoPage;
  let fixture: ComponentFixture<PagSolicitacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagSolicitacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
