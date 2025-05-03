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

    const realizarOperaciones = (productosParaOperar) => {
      console.log("\n--- Realizando operaciones ---");

      console.log("\n--- 1 - Mostrar productos (forEach) ---");
      productosParaOperar.forEach(producto => {
          console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
      });

      console.log("\n--- 2 - Productos con precio mayor a $20 (filter) ---");
      const productosMayor20 = productosParaOperar.filter(producto => producto.precio > 20);
      console.log(productosMayor20);

      console.log("\n--- 3 - Productos con IVA incluido (map) ---");
      const productosConIVA = productosParaOperar.map(producto => ({
          ...producto,
          precioConIVA: producto.precio * 1.21,
      }));
      console.log(productosConIVA);

      console.log("\n--- 4 - Array ordenado por precio (sort) ---");
      const productosOrdenados = [...productosParaOperar].sort((a, b) => a.precio - b.precio);
      console.log(productosOrdenados);
  };

  return (
    <div className="container">
    <h1>Operaciones con Productos</h1> 

    <div>
        <h2>Agregar Nuevo Producto</h2>
        <input
            type="text"
            placeholder="Descripción"
            value={nuevaDescripcion}
            onChange={(e) => setNuevaDescripcion(e.target.value)}
        />
        <input
            type="number"
            placeholder="Precio"
            value={nuevoPrecio}
            onChange={(e) => setNuevoPrecio(e.target.value)}
        />
        <button onClick={agregarProductoWeb}>Agregar Producto</button>
    </div>

    <div>
        <h2>Eliminar Producto con Precio Mínimo</h2>
        <button onClick={eliminarProductoPrecioMinimoWeb}>Eliminar Mínimo</button>
    </div>

    <h2>Lista de Productos Actual</h2>
    <ul>
        {productos.map((producto, index) => (
            <li key={index}>
                {producto.descripcion} - Precio: ${producto.precio.toFixed(2)}
            </li>
        ))}
    </ul>

    <button onClick={() => realizarOperaciones(productos)}>Realizar Operaciones en Consola</button>
    </div>
  )
}

export default App
