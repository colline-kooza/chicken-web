import { getDetails } from "@/app/lib/getproducts";
import Image from "next/image";

export default async function page({ params: { slug } }) {
  const products = await getDetails();
  const product = products.product?.find((product) => product.slug == slug);
  console.log(product);
  return (
    <div className="main-products">
      <div className="products-image">
        <div className="image">
          <Image src={product.image} alt="" objectFit="contain" fill />
        </div>
      </div>
      <div className="product-header">
        <h2>{product.header}</h2>
        <h5>{product.slug}</h5>
      </div>
      <div className="products-text">
        <h4>Description</h4>
        <p>{product.description}</p>
        <h4>overview</h4>
        <p>{product.overview}</p>
      </div>
      <div className="Products-button">
        <button>{product.button}</button>
      </div>
    </div>
  );
}
