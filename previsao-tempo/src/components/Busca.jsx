import weathermapClient from '../utils/weathermapClient'
import React, { useEffect, useState } from 'react'

const Busca = ({ setBusca }) => {
  const [termoDeBusca, setTermoDeBusca] = useState('São Paulo')

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (termoDeBusca.length >= 3) {
        const fazerBusca = async () => {
          try {
            const response = await weathermapClient.get(`/search`, {
              params: { query: termoDeBusca }
            })
            setBusca(response.data)
          } catch (error) {
            console.error("Erro ao buscar os dados:", error)
          }
        }
        fazerBusca()
      }
    }, 2000)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [termoDeBusca])

  return (
    <div>
      <input
      style={{ borderRadius: '10px', borderColor: 'black', borderWidth: '2px', borderStyle: 'solid', fontSize: '20px', padding: '10px', textAlign: 'center', width: '150px' }}
        type="text"
        value={termoDeBusca}
        onChange={(e) => setTermoDeBusca(e.target.value)}
      />
    </div>
  )
}

export default Busca
