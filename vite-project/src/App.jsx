import ProductList from './componentes/ProductList'
import ProductForm from './componentes/ProductForm'
import {Products as data}  from './Products'
import './App.css'
import {useEffect, useState} from 'react'

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
    });

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

      //Eliminamos el producto
      setProducts(Products.filter((p) => p.id !== id));

      //Rellenamos Formulario para poder modificar ese producto
      setFormValues(product)
    }

    return (
      <div>
        <ProductForm AddProduct={AddProduct} formValues={formValues} setFormValues={setFormValues} Products={Products}/>
        <ProductList Products={Products} onModifyProduct={onModifyProduct}/>
      </div>
    )
}

export default App
