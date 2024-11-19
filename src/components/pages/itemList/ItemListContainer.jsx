import { useState } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
import ProductCard from "../../productCard/ProductCard";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Estoy en el shop</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            unit_price={product.unit_price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
