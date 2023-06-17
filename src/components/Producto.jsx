function Producto({ producto, setProducto, eliminarProducto }) {
  // console.log(paciente);
  const handleEliminar = () => {
    const respuesta = confirm('¿Desea Eliminar el Paciente?');

    if (respuesta) {
      eliminarProducto(producto.id);
    }
  };
  return (
    <div className=' bg-Web-Orange px-5 py-5 rounded-xl shadow-xl mt-2 border-2 border-Cedar ml-5'>
      <p className=' font-bold text-Cedar block'>
        Categoría:
        <span className='font-normal text-white'> {producto.categoria}</span>
      </p>
      <p className=' font-bold text-Cedar block'>
        Nombre:
        <span className='font-normal text-white'> {producto.nombre}</span>
      </p>
      <p className=' font-bold text-Cedar block'>
        Stok:
        <span className='font-normal text-white'> {producto.stok}</span>
      </p>
      <p className=' font-bold text-Cedar block'>
        Marca:<span className='font-normal text-white'> {producto.marca}</span>
      </p>
      <p className=' font-bold text-Cedar block'>
        Precio:
        <span className='font-normal text-white'>S/. {producto.precio}.00</span>
      </p>

      <img
        src={producto.imagen}
        alt='Producto'
        className='w-40 h-40 object-cover rounded-md mt-4 relative float-right -top-32'
      />

      <p className=' font-bold text-Cedar block'>
        Descripción:
        <span className='font-normal text-white'> {producto.descripcion}</span>
      </p>
      <div>
        <button
          type='button'
          className='px-10 py-2 bg-Flamingo hover:bg-Cedar text-white rounded-xl mt-2 mx-3'
          onClick={() => setProducto(producto)}
        >
          Editar
        </button>
        <button
          type='button'
          className='px-10 py-2 bg-red-600 hover:bg-red-800 text-white rounded-xl'
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Producto;
