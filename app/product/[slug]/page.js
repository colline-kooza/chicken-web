import { getDetails } from "@/app/lib/getproducts";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = params;
  // fetch data
  const products = await getDetails();

  const product = products.product?.find((product) => product.slug == slug);
  console.log(product);
  return {
    title: product.title,
    description: product.overview,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function page({ params: { slug } }) {
  const products = await getDetails();
  const product = products.product?.find((product) => product.slug == slug);
  console.log(product);
  return (
    <div className="main-products">
      <div className="products-image">
        <div className="image">
          <Image
            src={product.image}
            alt="Flako Industries' skilled team works passionately, crafting unmatched quality products. With decades of experience, we lead the production industry, driven by excellence and innovation. Together, we deliver fine craftsmanship, ensuring customer satisfaction"
            objectFit="contain"
            fill
          />
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
