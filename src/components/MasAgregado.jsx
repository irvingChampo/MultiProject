import React from 'react'
import { CardSlider } from './CardSlider'
import { useGet } from '../../public/hooks/useGet'

export const MasAgregado = () => {
    const {data} = useGet('http://44.194.73.147/api/v1/productos/mas-agregados')
  return (
    <div>
        <h1>Más agregados al carrito</h1>
        <CardSlider data = { data }/>
    </div>
  )
}
