export class Solicitacao {
    protocolo: number | null;
    tipoServico: string;
    detalhes: string;
    cep: number | null;
    endereco: string;
    numero: number | null;
    pontoReferencia: string;
    dataSolicitacao: Date | null;

    constructor() {
        this.protocolo = null;
        this.tipoServico = '';
        this.detalhes = '';
        this.cep = null;
        this.endereco = '';
        this.numero = null;
        this.pontoReferencia = '';
        this.dataSolicitacao = null;
    }
}