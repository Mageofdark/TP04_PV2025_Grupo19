
function ProductList( {Products} ) {


    if (Products.length === 0) {
        return (<h1>No hay productos cargados</h1>)
    }

  return (
    <div>
        {Products.map((product) => (
            <div key={product.id}>
                <h2>{product.nombre}</h2>
                <p>{product.descripcion}</p>
                <p>Precio: {product.precioUn}</p>
                <p>Descuento: {product.descuento}</p>
                <p>Precio con descuento: {(product.precioUn * (1 - product.descuento / 100)).toFixed(2)}</p>
                <p>Stock: {product.Stock}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductList