import React from 'react'
import { CardSlider } from './CardSlider'
import { useGet } from '../../public/hooks/useGet'

export const MasVendido = () => {
    const { data } = useGet('http://44.194.73.147/api/v1/productos')
  return (
    <div>
        <h1>Mas vendido</h1>
        <CardSlider data = { data }/>
    </div>
  )
}
