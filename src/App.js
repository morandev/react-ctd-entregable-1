import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {

  // ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
  // MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
  const [productosComprados, setProductosComprados] = useState(0)

  return (
    <div className="App">
      {
        // El componente App es el padre de:
        // - Cabecera
        // - Listado

        // PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
      }
      <Cabecera productosComprados={productosComprados}/>
      <Listado setProductosComprados={setProductosComprados}/>
    </div>
  );
}

export default App;
