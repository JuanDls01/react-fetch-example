import { useEffect, useState } from "react";
import axios from "axios";
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
    <div className='App'>
      {productList &&
        productList.map((product, index) => {
          return <div key={index}>{product.name}</div>;
        })}
    </div>
  );
}

export default App;
