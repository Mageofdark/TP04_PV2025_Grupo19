import React, { useState, useMemo} from "react";
import ProductList from "./ProductList";

//Componente Principal. Se recibe elementos de los otros componenetes
const SearchBar = ({
  products,
  onModifyProduct,
  onDelteProduct,
  deletedCount
}) => {
  //se crea un estado par los terminos de busqueda alamacenando lo que el usuario escribe
  const[searchTerm, setSearchTerm] = useState('')
  // Memoriza los productos filtrados
  const filteredProducts = useMemo (()=> {
    //si no hay termino de busqueda retorna un array vacio
    if (!searchTerm.trim()) return[];
    // tolowercase para que no haya distincion entre mayuscula y minuscula
    const term = searchTerm.toLowerCase();
    return products.filter(product => {
      // si el producto no es visible se lo excluye de los resultados
      if(!product.visible) return false;
      // Verifica si la busqueda coincide con nombre o descripcion de un producto para despues retornar true si coincide ambas o uno solo
      const MatchName = product.nombre.toLowerCase().includes(term);
      const MatchDesc = product.descripcion.toLowerCase().includes(term);
      return MatchName || MatchDesc;
    });
  }, [products, searchTerm]);
  // booleanos, true cuando hay texto de busqueda y resultados
  const hasSearchResults = searchTerm.trim() && filteredProducts.length > 0;
  // true cuando hay texto pero no resultados
  const noSearchResults = searchTerm.trim() && filteredProducts.length === 0;
  return(
    <div>
      <input
       type="text"
       value={searchTerm}
       // se ejecuta cada que el usuario escribe almacenando en e.target.value
       onChange={(e)=> setSearchTerm(e.target.value)}
       placeholder="Buscar Productos" 
       />
       {/*Renderiza si hay resultados */}
       {hasSearchResults &&(
        <div>
          <h2>Resultados de busqueda para "{searchTerm}"</h2>
          <ProductList
          Products={filteredProducts}
          onModifyProduct={onModifyProduct}
          onDeleteProduct={onDelteProduct}
          deletedCount={deletedCount}
          />
        </div>
       )}
       {/*Renderiza caundo no hay resultados*/}
       {noSearchResults && (
        <div>
          <h2>Resultados de busqueda</h2>
          <p>No se encontraton Productos con "{searchTerm}"</p>
        </div>
       )}
    </div>
  );
};

export default SearchBar;