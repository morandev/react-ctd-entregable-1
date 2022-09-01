import { useState } from "react"


// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
export default function Item({ item, setProductosComprados }) {
  // ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
  const [actualStock, setActualStock] = useState(item.stock)
  // MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
  const comprar = () => {
    setProductosComprados( pc => pc + 1 );
    setActualStock( stk => stk-1 )
  }

  return (
    <div className='producto'>
      {
        // El componente Item no tiene componentes hijos.
        /* maquetar Item aquí */
        // Maqueta de Item:
        //    h3
        //    p
        //    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
        //    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
      }
      <h3>{item.producto.nombre}</h3>
      <p>{item.producto.descripcion}</p>
      <h5>En stock: {actualStock||<span>Agotado</span>}</h5>
      <button onClick={comprar} disabled={!actualStock}>{actualStock?'COMPRAR':'Sin stock'}</button>
    </div>
  )
}
