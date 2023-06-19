import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Producto({ producto, setProducto, eliminarProducto }) {
  // console.log(paciente);
  const handleEliminar = () => {
    const respuesta = confirm('¿Desea Eliminar el Producto?');

    if (respuesta) {
      eliminarProducto(producto.id);
    }
  };
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <Card sx={{ width: '50%' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={producto.imagen}
          title='Producto'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            CATEGORÍA: {producto.categoria}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <b>NOMBRE: </b>
            {producto.nombre}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <b>STOK: </b> {producto.stok}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <b>MARCA: </b> {producto.marca}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <b>PRECIO:</b> S/.{producto.precio}.00
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <b>DESCRIPCIÓN:</b> {producto.descripcion}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='large'
            onClick={() => setProducto(producto)}
            variant='outlined'
            color='success'
            startIcon={<EditIcon />}
          >
            Editar
          </Button>
          <Button
            size='large'
            onClick={handleEliminar}
            variant='outlined'
            color='error'
            startIcon={<DeleteIcon />}
          >
            Borrar
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Producto;
