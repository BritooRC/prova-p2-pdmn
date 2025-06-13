import { Card } from 'primereact/card'
import striptags from 'striptags'

const PrevisaoLista = ({ dados }) => {
  return (
    <div>
        <br />
      {dados.map((item, index) => (
        <Card
          key={index}
          style={{
            backgroundColor: 'lightblue',color: 'black',borderColor: 'white',borderWidth: '4px',borderStyle: 'solid',borderRadius: '20px',width: '250px',textAlign: 'center',
            fontSize: '20px',padding: '10px'}}>
          <img
            src={`https://openweathermap.org/img/wn/${striptags(item.icone)}@2x.png`}
            alt={striptags(item.descricao)}
          />
          <p>{striptags(item.descricao)}</p>
          <p>Temperatura Mínima: {striptags(String(item.temperatura_minima))}°C</p>
          <p>Temperatura Máxima: {striptags(String(item.temperatura_maxima))}°C</p>
          <p>Umidade: {striptags(String(item.umidade))}%</p>
        </Card>
      ))}
    </div>
  )
}

export default PrevisaoLista
