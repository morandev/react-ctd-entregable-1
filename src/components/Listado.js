import React from 'react'
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
import data from './data.json'
import Item from './Item'


// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
export default function Listado({setProductosComprados}) {
  // ESTADO: Listado no necesita manejar un estado.
  // MÉTODOS: Listado no requiere de métodos.
  return (
    <div className='container'>
      {
        /* renderizamos los Item aquí */        
        // El componente Listado es el padre de:
        // - varios Item
        data.map( itm => <Item key={itm.id} item={itm} setProductosComprados={setProductosComprados} />)
      }
    </div>
  )
}
