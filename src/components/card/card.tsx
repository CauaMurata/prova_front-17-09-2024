import { Comodo } from '../../interface/ImovelData';
import './card.css'

interface CardProps {
    descricao: string;
    dataCompra: string;
    endereco: string;
    comodos: Comodo[];
}
  
export function Card({ descricao, dataCompra, endereco, comodos }: CardProps) {
    const formattedDate = new Date(dataCompra).toLocaleDateString();

    return (
        <div className="card">
            <h2>{descricao}</h2>
            <p><b>Descrição:</b> {descricao}</p>
            <p><b>Data de Compra:</b> {formattedDate}</p>
            <p><b>Endereço:</b> {endereco}</p>
            <p><b>Cômodos:</b></p>
            <ul>
                {comodos.map((comodo) => (
                    <li key={comodo.id}>{comodo.nome}</li>
                ))}
            </ul>
        </div>
    );
}
  