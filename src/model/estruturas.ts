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
    toJSON() {
        return {
            protocolo: this.protocolo,
            tipoServico: this.tipoServico,
            detalhes: this.detalhes,
            foto: this.foto,
            cep: this.cep,
            logradouro: this.logradouro,
            numero: this.numero,
            pontoReferencia: this.pontoReferencia,
            dataSolicitacao: this.dataSolicitacao
        };
    }
}