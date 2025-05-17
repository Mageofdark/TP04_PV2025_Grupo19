function ProductForm({ AddProduct, formValues, setFormValues, Products }) {
    // Actualiza el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Actualiza el array Products
    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            ...formValues,
            id: getFreeId(Products),
            precioDes: (formValues.precioUn * (1 - formValues.descuento / 100)).toFixed(2),
        };
        AddProduct(newProduct); // Llama a la función AddProduct
        setFormValues({
            id: '',
            nombre: '',
            precioUn: '',
            descripcion: '',
            descuento: '',
            Stock: '',
            visible: true,
        });
    };

    // Funcion que retorna el primer id libre
    function getFreeId(Products){
        let id = 1;
        const indexes = new Set(Products.map((p) => p.id));
        while(indexes.has(id)) id++;
        return id;
    }

    return (
        <div>
            <h1>Lista de productos</h1>
            <p> ID: {getFreeId(Products)} </p>
            <form onSubmit={handleAddProduct}>
                <input type="text" name="nombre" placeholder="Nombre del Producto" value={formValues.nombre} onChange={handleChange} required/>
                <input type="text" name="descripcion" placeholder="Descripción del Producto" value={formValues.descripcion} onChange={handleChange} />
                <input type="number" name="Stock" placeholder="Cantidad" value={formValues.Stock} onChange={handleChange} min="1" required/>
                <input type="number" name="precioUn" placeholder="Precio del Producto" value={formValues.precioUn} onChange={handleChange} min="0" required/>
                <input type="number" name="descuento" placeholder="Descuento" value={formValues.descuento} onChange={handleChange} min="0" max="100"/>
                <input type="submit" value="Agregar productos" />
            </form>
        </div>
    );
}

export default ProductForm;