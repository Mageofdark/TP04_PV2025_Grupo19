import ProductList from './componentes/ProductList'
import ProductForm from './componentes/ProductForm'
import {Products as data}  from './Products'
import './App.css'
import {useEffect, useState} from 'react'

function App() {

      // useState que guarda los productos
    const [Products, setProducts] = useState([])
    // useEffect que carga los productos
    useEffect(() => {
        setProducts(data)
    }, [])

    function AddProduct(newProducts) {
      setProducts([...Products, newProducts])
      
    }

  return (
    <div>
      <ProductForm AddProduct={AddProduct}/>
      <ProductList Products={Products}/>
    </div>
  )
}

export default App
