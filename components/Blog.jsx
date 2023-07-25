import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Blog() {
  const blogs = [
    "Are you a coffee enthusiast who dreams of creating the perfect cup of coffee? Look no further! Our premium coffee beans offer a delightful journey of coffee connoisseurship right in the comfort of your home.",
    "Are you a culinary enthusiast who loves experimenting with new flavors and textures? Look no further! Our high-quality Grandnuts seeds are the perfect companion for your culinary creations.",
    "Are you passionate about cooking and looking for ingredients that can add depth and versatility to your dishes? Our premium bean seeds are the answer to your culinary aspirations!",
    "Are you on a journey towards a healthier lifestyle and exploring plant-based protein options? Our versatile soybean seeds are here to help you embrace health and flavor in your cooking! These incredible seeds offer a wide range of possibilities to create wholesome and flavorful dishes.",
  ];

  return (
    <div id="blogs" className="blogs">
      <h2>BLOGS</h2>
      <div className="blogs-container">
        <div className="blogs-text">
          {blogs.map((blog) => {
            return (
              <p>
                {blog} <BsArrowRight size={35} />
              </p>
            );
          })}
        </div>
        <div className="blogs-image">
          <h1>
            Our Purpose as Flako is to provide quality poultry that are
            affordable with exceptional nutritional quality.
          </h1>
          <div className="image">
            <Image src="/images/hen.png" alt="Flako Industries' skilled team works passionately, crafting unmatched quality products. With decades of experience, we lead the production industry, driven by excellence and innovation. Together, we deliver fine craftsmanship, ensuring customer satisfaction" width={220} height={320} />
          </div>
        </div>
      </div>
    </div>
  );
}
