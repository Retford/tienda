import { useState } from 'react';

import Header from './components/Header';
import CargarProductos from './components/CargarProductos';
import ListaProductos from './components/ListaProductos';

function App() {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const eliminarProducto = (id) => {
    const productosActualizados = productos.filter(
      (producto) => producto.id != id
    );
    setProductos(productosActualizados);
  };

  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='flex mt-5'>
        <CargarProductos
          productos={productos}
          setProductos={setProductos}
          producto={producto}
          setProducto={setProducto}
        />
        <ListaProductos
          productos={productos}
          setProducto={setProducto}
          eliminarProducto={eliminarProducto}
        />
      </div>
    </div>
  );
}

export default App;
