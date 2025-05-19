function ProductList( {Products, onModifyProduct, onDeleteProduct, deletedCount} ) {
    // Verifica si esta vacio el array Products
    if(Products.length - deletedCount === 0) // Ya que eliminar solo oculta los productos, entonces tambien hay que restar esos productos con deletedCount
        return (<h1>No hay productos cargados</h1>)

    return (
    <div>
        {Products.map((product) => product.visible && // Verifica que el producto debe estar visible
        (<div className="div_producto" key={product.id}>
                <h3>{product.nombre}</h3>
                <ul>
                    <li>{product.descripcion}</li>
                    <li><b>Precio:</b> {product.precioUn} $</li>
                    <li><b>Descuento:</b> {product.descuento}%</li>
                    <li><b>Precio con descuento:</b> {(product.precioUn * (1 - product.descuento / 100)).toFixed(2)} $</li>
                    <li><b>Stock:</b> {product.Stock} u</li>
                </ul>
                <button className="btn" onClick={() => { onModifyProduct(product.id) }}> Modificar </button>
                <button className="btn" onClick={() => { onDeleteProduct(product.id) }}> Eliminar  </button>
            </div>
        ))}
    </div>
  )
}

export default ProductList