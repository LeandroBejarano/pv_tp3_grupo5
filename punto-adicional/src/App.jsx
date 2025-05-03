import { useState } from 'react'

function App() {
  const [productos, setProductos] = useState([
    { descripcion: "Auriculares Inalámbricos", precio: 49000.50 },
    { descripcion: "Mouse Óptico", precio: 15000 },
    { descripcion: "Monitor 24 Pulgadas", precio: 120000 },
    { descripcion: "Webcam HD", precio: 35000.75 },
    { descripcion: "Parlante Estéreo", precio: 28000 },
    ]);

    const [nuevaDescripcion, setNuevaDescripcion] = useState('');
    const [nuevoPrecio, setNuevoPrecio] = useState('');

    const agregarProductoWeb = () => {
        if (nuevaDescripcion.trim() && !isNaN(parseFloat(nuevoPrecio))) {
            const nuevoProducto = {
                descripcion: nuevaDescripcion,
                precio: parseFloat(nuevoPrecio),
            };
            setProductos([...productos, nuevoProducto]);
            setNuevaDescripcion('');
            setNuevoPrecio('');
            console.log("Producto agregado:", nuevoProducto);
            realizarOperaciones(productos);
        } else {
            alert("Por favor, ingresa una descripción y un precio válido.");
        }
    };

    const eliminarProductoPrecioMinimoWeb = () => {
        if (productos.length > 0) {
            const precioMinimo = Math.min(...productos.map(p => p.precio));
            const nuevoProductos = productos.filter(p => p.precio !== precioMinimo);
            setProductos(nuevoProductos);
            console.log("Producto con precio mínimo eliminado.");
            realizarOperaciones(nuevoProductos);
        } else {
            alert("No hay productos para eliminar.");
        }
    };
    
  return (
    <>

    </>
  )
}

export default App
