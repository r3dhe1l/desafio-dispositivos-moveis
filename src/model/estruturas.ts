export class Solicitacao {
    protocolo: number | null;
    tipoServico: string;
    detalhes: string;
    cep: number | null;
    logradouro: string;
    numero: number | null;
    pontoReferencia: string;
    dataSolicitacao: Date | null;

    constructor() {
        this.protocolo = null;
        this.tipoServico = '';
        this.detalhes = '';
        this.cep = null;
        this.logradouro = '';
        this.numero = null;
        this.pontoReferencia = '';
        this.dataSolicitacao = null;
    }
}