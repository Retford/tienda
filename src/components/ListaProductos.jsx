import Producto from './Producto';

const ListaProductos = ({ productos, setProducto, eliminarProducto }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className=' font-black text-2xl text-center text-Cafe-Royale'>
        Listado de Productos en la Tienda
      </h2>
      <p className='font-bold text-center text-Ripe-Limon'>
        Editar y Eliminar Productos
      </p>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          setProducto={setProducto}
          eliminarProducto={eliminarProducto}
        />
      ))}
    </div>
  );
};

export default ListaProductos;
