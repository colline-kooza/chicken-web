import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MoreProducts({ data }) {
  console.log(data);
  return (
    <div className="products-container">
      {data.map((product, id) => {
        return (
          <Link key={product.id} href="">
            <div className="MoreProducts">
              <h2>{product.header}</h2>
              <p>{product.description}</p>
              <Link href={`/product/${product.slug}`}>
                <button>{product.button}</button>
              </Link>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
