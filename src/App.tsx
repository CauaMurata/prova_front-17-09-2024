import './App.css'
import { Card } from './components/card/card';
import { useImovelData } from './hooks/useImovelData';

function App() {
  const { data } = useImovelData();
  

  return (
      <div className="container">
          <h1>Imóveis</h1>
          <div className="card-grid">
              {data?.map(imovelData => (
                  <Card
                      key={imovelData.id}
                      descricao={imovelData.descricao}
                      dataCompra={imovelData.dataCompra}
                      endereco={imovelData.endereco}
                      comodos={imovelData.comodos} 
                  />
              ))}
          </div>
      </div>
  );
}

export default App
