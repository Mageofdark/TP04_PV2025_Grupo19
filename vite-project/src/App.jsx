import ProductList from './componentes/ProductList'
import ProductForm from './componentes/ProductForm'
import {Products as data}  from './Products'
import './App.css'
import {useEffect, useState, useCallback} from 'react'

function App() {
    // useState que guarda los productos
    const [Products, setProducts] = useState([]);
    
    // useState que guarda los datos del formulario
    const [formValues, setFormValues] = useState({
        id: '',
        nombre: '',
        precioUn: '',
        descripcion: '',
        descuento: '',
        Stock: '',
        visible: true,
    });

    // useState que guarda la cantidad de productos eliminados (en realidad productos no visibles)
    const [deletedCount, setDeletedCount] = useState(0);

    // useEffect que carga los productos
    useEffect(() => {
      setProducts(data)
    }, [])

    // Funcion que añade un producto
    function AddProduct(newProducts) {
      setProducts([...Products, newProducts])
    }

    // Funcion que modifica un producto
    function onModifyProduct(id) {
      const product = Products.find(p => p.id === id);

      // Eliminamos el producto
      setProducts(Products.filter((p) => p.id !== id));

      // Rellenamos Formulario para poder modificar ese producto
      setFormValues(product)
    }

    //Uso de useCallback para que no se renderice x cada actualizacion de formValues
    // Hace no visible a un producto
    const onDeleteProduct = useCallback((id) => {
      // Cambia el atributo 'visible' del producto a falso
      const updatedProducts = Products.map(p => {
        if(p.id === id) return {...p, visible: false};
        return p;
      });

      // Aumentamos los productos eliminados
      setDeletedCount(deletedCount + 1);

      // Actualizamos los productos
      setProducts(updatedProducts);
      
    }, [Products, deletedCount]);

    return (
      <div>
        <ProductForm AddProduct={AddProduct} formValues={formValues} setFormValues={setFormValues} Products={Products}/>
        <ProductList Products={Products} onModifyProduct={onModifyProduct} onDeleteProduct={onDeleteProduct} deletedCount={deletedCount}/>
      </div>
    )
}

export default App
