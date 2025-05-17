function ProductList( {Products, onModifyProduct, onDeleteProduct, deletedCount} ) {
    // Verifica si esta vacio el array Products
    if(Products.length - deletedCount === 0) // Ya que eliminar solo oculta los productos, entonces tambien hay que restar esos productos con deletedCount
        return (<h1>No hay productos cargados</h1>)

    return (
    <div>
        {Products.map((product) => product.visible && // Verifica que el producto debe estar visible
        (<div key={product.id}>
                <h2>{product.nombre}</h2>
                <ul>
                    <li>{product.descripcion}</li>
                    <li>Precio: {product.precioUn} $</li>
                    <li>Descuento: {product.descuento} %</li>
                    <li>Precio con descuento: {(product.precioUn * (1 - product.descuento / 100)).toFixed(2)} $</li>
                    <li>Stock: {product.Stock} u</li>
                </ul>
                <button onClick={() => { onModifyProduct(product.id) }}> Modificar </button>
                <button onClick={() => { onDeleteProduct(product.id) }}> Eliminar  </button>
            </div>
        ))}
    </div>
  )
}

export default ProductList