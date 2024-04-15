import React from 'react'
import { CardSlider } from './CardSlider'
import { useGet } from '../../public/hooks/useGet'

export const AgregadoReciente = () => {
    const { data } = useGet('http://44.194.73.147/api/v1/productos/recientes') 
  return (
    <div>
        <h1>Agregado Recientemente</h1>
        <CardSlider data={data}/>
    </div>
  )
}
