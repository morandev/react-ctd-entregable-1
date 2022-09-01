import React from 'react'


// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
export default function Cabecera({ productosComprados }) {
  // ESTADO: Cabecera no tiene estado.
  // MÉTODOS: Cabecera no tiene métodos.  
  return (
    <header>
      {
        /* maquetar Cabecera aquí */
        // El componente Cabera no tiene componentes hijos.
        // Maqueta de Cabecera:
        //    h1
        //    p > span     (el span mostrará la cantidad recibida por props)
      }
      <h1>Carrito de compras</h1>
      <p>Cantidad de productos <span>{productosComprados}</span></p>
    </header>
  )
}
