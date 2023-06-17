import { useState, useEffect } from 'react';
import Error from './Error';
import Producto from './Producto';

const CargarProductos = ({
  productos,
  setProductos,
  producto,
  setProducto,
}) => {
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [stok, setStok] = useState('');
  const [marca, setMarca] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const [imagen, setImagen] = useState(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(producto).length > 0) {
      setCategoria(producto.categoria);
      setNombre(producto.nombre);
      setStok(producto.stok);
      setMarca(producto.marca);
      setPrecio(producto.precio);
      setDescripcion(producto.descripcion);
    }
  }, [producto]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if ([categoria, nombre, stok, marca, precio, descripcion].includes('')) {
      setError(true);
      return;
    }
    const objetoProducto = {
      categoria,
      nombre,
      stok,
      marca,
      precio,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    };
    if (producto.id) {
      //MODO EDITAR
      objetoProducto.id = producto.id;
      const productosActualizados = productos.map((producto) =>
        producto.id === producto.id ? objetoProducto : producto
      );
      setProductos(productosActualizados);
      setProducto({});
    } else {
      //MODO AGREGAR
      objetoProducto.id = generarId();
      setProductos([...productos, objetoProducto]);
    }

    setCategoria('');
    setNombre('');
    setStok('');
    setMarca('');
    setPrecio('');
    setDescripcion('');
    setError(false);
  };
  const generarId = () => {
    const fecha = Date.now().toString(36);
    const aleatorio = Math.random().toString(36).substring(2);
    return fecha + aleatorio;
  };

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className=' font-black text-2xl text-center text-Cafe-Royale'>
        Cargar Productos
      </h2>
      <p className='font-bold text-center text-Ripe-Limon'>
        Ingreso de Datos del Producto
      </p>

      <form
        className=' bg-Cedar px-5 py-5 rounded-xl shadow-xl mt-2'
        onSubmit={handlerSubmit}
      >
        {error && <Error texto='Todos los campos son obligatorios' />}
        <div className='mb-3'>
          <label
            htmlFor='categoria'
            className=' font-bold text-white block pb-4'
          >
            Categoría del Producto:
          </label>
          <input
            id='categoria'
            type='text'
            className='w-full border-2 p-2 rounded-lg placeholder-Ripe-Limon outline-none'
            placeholder='Categoría del Producto'
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='nombre' className=' font-bold text-white block pb-4'>
            Nombre del Producto:
          </label>
          <input
            id='nombre'
            type='text'
            className='w-full border-2 p-2 rounded-lg placeholder-Ripe-Limon outline-none'
            placeholder='Nombre del producto'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='stok' className=' font-bold text-white block pb-4'>
            Stok:
          </label>
          <input
            id='stok'
            type='number'
            className='w-full border-2 p-2 rounded-lg placeholder-Ripe-Limon outline-none'
            placeholder='Stok del Producto'
            value={stok}
            onChange={(e) => setStok(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='marca' className=' font-bold text-white block pb-4'>
            Marca del Producto:
          </label>
          <input
            id='marca'
            type='text'
            className='w-full border-2 p-2 rounded-lg placeholder-Ripe-Limon outline-none'
            placeholder='Marca del Producto'
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='precio' className=' font-bold text-white block pb-4'>
            Precio del Producto:
          </label>
          <input
            id='precio'
            type='number'
            className='w-full border-2 p-2 rounded-lg placeholder-Ripe-Limon outline-none'
            placeholder='Precio del Producto'
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='imagen' className='font-bold text-white block pb-4'>
            Imagen del Producto:
          </label>
          <input
            id='imagen'
            type='file'
            className='outline-none'
            onChange={(e) => setImagen(e.target.files[0])}
          />
        </div>

        <div className='mb-3'>
          <label
            htmlFor='descripcion'
            className=' font-bold text-white block pb-4'
          >
            Descripción del Producto:
          </label>
          <textarea
            id='descripcion'
            className='w-full border-2 p-2 rounded-lg placeholder-Ripe-Limon outline-none'
            placeholder='Ingrese los síntomas'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value={producto.id ? 'Guardar Producto' : 'Agregar Producto'}
          className=' bg-Ripe-Limon p-3 w-full text-Cafe-Royale font-black hover:bg-Flamingo hover:text-white transition-colors rounded-xl'
        />
      </form>
    </div>
  );
};

export default CargarProductos;
