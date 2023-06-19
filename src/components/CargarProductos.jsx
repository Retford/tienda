import { useState, useEffect } from 'react';
import Error from './Error';
import { TextField, ThemeProvider, createTheme } from '@mui/material';

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
      const productosActualizados = productos.map((productoState) =>
        productoState.id === producto.id ? objetoProducto : productoState
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

  const theme = createTheme({
    palette: {
      marron: {
        main: '#7d4a0c',
      },
      transparente: {
        main: 'transparent',
      },
    },
  });

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className=' font-black text-2xl text-center text-Cafe-Royale'>
        Cargar Productos
      </h2>
      <p className='font-bold text-center text-Ripe-Limon'>
        Ingreso de Datos del Producto
      </p>

      <form
        className='px-5 py-5 rounded-xl shadow-2xl mt-2'
        onSubmit={handlerSubmit}
      >
        {error && <Error texto='Todos los campos son obligatorios' />}
        <ThemeProvider theme={theme}>
          <TextField
            id='categoria'
            label='Categoria'
            variant='outlined'
            fullWidth
            margin='normal'
            onChange={(e) => setCategoria(e.target.value)}
            value={categoria}
            color='marron'
          />
          <TextField
            id='nombre'
            label='Nombre'
            variant='outlined'
            fullWidth
            margin='normal'
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            color='marron'
          />
          <TextField
            id='stok'
            label='Stok'
            variant='outlined'
            fullWidth
            margin='normal'
            onChange={(e) => setStok(e.target.value)}
            value={stok}
            type='number'
            color='marron'
          />
          <TextField
            id='marca'
            label='Marca'
            variant='outlined'
            fullWidth
            margin='normal'
            onChange={(e) => setMarca(e.target.value)}
            value={marca}
            color='marron'
          />
          <TextField
            id='precio'
            label='Precio'
            variant='outlined'
            fullWidth
            margin='normal'
            onChange={(e) => setPrecio(e.target.value)}
            value={precio}
            color='marron'
            type='number'
          />
          <TextField
            id='imagen'
            variant='outlined'
            fullWidth
            margin='normal'
            onChange={(e) => setImagen(e.target.files[0])}
            type='file'
            color='marron'
          />

          <TextField
            id='descripcion'
            variant='outlined'
            fullWidth
            margin='normal'
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
            label='Descripción del Producto'
            multiline
            color='marron'
          />

          <TextField
            type='submit'
            value={producto.id ? 'Guardar Producto' : 'Agregar Producto'}
            className='bg-Ripe-Limon w-full text-white hover:bg-Flamingo'
            color='transparente'
          />
        </ThemeProvider>
      </form>
    </div>
  );
};

export default CargarProductos;
