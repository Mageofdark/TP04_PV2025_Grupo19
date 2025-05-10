import { useState } from 'react';

function ProductForm({ AddProduct }) { // Recibe AddProduct como prop
    const [formValues, setFormValues] = useState({
        id: '',
        nombre: '',
        precioUn: '',
        descripcion: '',
        descuento: '',
        Stock: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            ...formValues,
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
        });
    };

    return (
        <div>
            <h1>Lista de productos</h1>
            <form onSubmit={handleAddProduct}>
                <input type="text" name="nombre" placeholder="Nombre del producto" value={formValues.nombre} onChange={handleChange} />
                <input type="number" name="precioUn" placeholder="Precio del producto" value={formValues.precioUn} onChange={handleChange} />
                <input type="text" name="descripcion" placeholder="Descripción del producto" value={formValues.descripcion} onChange={handleChange} />
                <input type="number" name="id" placeholder="Id" value={formValues.id} onChange={handleChange} />
                <input type="number" name="descuento" placeholder="Descuento" value={formValues.descuento} onChange={handleChange} />
                <input type="number" name="Stock" placeholder="Cantidad" value={formValues.Stock} onChange={handleChange} />
                <input type="submit" value="Agregar productos" />
            </form>
        </div>
    );
}

export default ProductForm;