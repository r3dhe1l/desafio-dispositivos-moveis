export class Solicitacao {
    protocolo: number | null;
    tipoServico: string;
    detalhes: string;
    foto: any;
    cep: number | null;
    logradouro: string;
    numero: number | null;
    pontoReferencia: string;
    dataSolicitacao: Date | null;

    constructor() {
        this.protocolo = null;
        this.tipoServico = '';
        this.detalhes = '';
        this.foto = null;
        this.cep = null;
        this.logradouro = '';
        this.numero = null;
        this.pontoReferencia = '';
        this.dataSolicitacao = null;
    }
}