import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ImovelData } from '../interface/ImovelData';

const API_URL = 'http://localhost:8080';


const fetchData = async (): Promise<ImovelData[]> => {
    const response = await axios.get<ImovelData[]>(`${API_URL}/imovel`);
    return response.data; 
}

export function useImovelData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['imovel-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data 
    };
}
