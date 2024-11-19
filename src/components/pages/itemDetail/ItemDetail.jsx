import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import ProductCardDetail from "../../productCard/ProductCardDetail";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let refCollections = collection(db, "products");
    let refDoc = doc(refCollections, id);
    getDoc(refDoc)
      .then((res) => setProduct({ ...res.data(), id: res.id }))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(product);

  return (
    <div>
      <h1>Detalle</h1>
      <ProductCardDetail
        key={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        unit_price={product.unit_price}
        category={product.category}
      />
    </div>
  );
};

export default ItemDetail;
