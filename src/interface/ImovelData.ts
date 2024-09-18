export interface Comodo {
    id: number;
    nome: string;
}

export interface ImovelData {
    id: number;
    descricao: string;
    dataCompra: string;
    endereco: string;
    comodos: Comodo[]; 
}