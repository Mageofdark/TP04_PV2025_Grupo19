function ProductList( {Products, onModifyProduct} ) {
    if (Products.length === 0) {
        return (<h1>No hay productos cargados</h1>)
    }

    return (
    <div>
        {Products.map((product) => (
            <div key={product.id}>
                <h2>{product.nombre}</h2>
                <ul>
                    <li>{product.descripcion}</li>
                    <li>Precio: {product.precioUn}</li>
                    <li>Descuento: {product.descuento}</li>
                    <li>Precio con descuento: {(product.precioUn *   (1 - product.descuento / 100)).toFixed(2)}</li>
                    <li>Stock: {product.Stock}</li>
                </ul>
                <button onClick={() => { onModifyProduct(product.id) }}> Modificar </button>
            </div>
        ))}
    </div>
  )
}

export default ProductList