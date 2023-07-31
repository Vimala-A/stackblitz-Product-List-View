import React, { useEffect, useState } from 'react';
// import Product from './Product';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const dataJson = await data.json();
    setProducts(dataJson);
    console.log('dd', dataJson);
  };
  return (
    <div>
      {products?.map((item) => (
        // <Product product={item} />
        <div>pp</div>
      ))}
    </div>
  );
};

export default ProductList;
