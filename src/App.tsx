import { useEffect, useState } from "react";
import { AddProductForm, ProductCard } from "./components";
import { ProductType } from "./models/products";
import { getPorducts } from "./services/getProducts.service";

type ProductList = ProductType[];

function App() {
  const [productList, setProductList] = useState<ProductList>([]);

  useEffect(() => {
    getPorducts().then((products) => {
      setProductList(products);
    });
  }, []);

  return (
    <div className=' flex flex-col justify-between items-center'>
      <div className='h-screen w-96 flex flex-col m-4'>
        <h1 className='text-6xl font-bold text-white mb-10'>Products App</h1>
        <h3 className='text-2xl font-bold text-white mb-5'>Create Product</h3>
        <AddProductForm />
        <h3 className='text-2xl font-bold text-white mb-5'>Products List</h3>
        {productList ? (
          productList.map((product, index) => {
            return (
              <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                marca={product.marca}
              />
            );
          })
        ) : (
          <p>No product founded</p>
        )}
      </div>
    </div>
  );
}

export default App;
