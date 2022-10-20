import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
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
