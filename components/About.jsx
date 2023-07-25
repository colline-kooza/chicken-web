import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import aboutImage from "../public/images/aboutHens.jpg";

export default function About() {
  return (
    <div id="about" className="About">
      <h1>Who We are</h1>
      <div className="About-container">
        <div className="About-image">
          <div className="image">
            <Image
              src={aboutImage}
              alt="Flako Industries' skilled team works passionately, crafting unmatched quality products. With decades of experience, we lead the production industry, driven by excellence and innovation. Together, we deliver fine craftsmanship, ensuring customer satisfaction"
              fill
            />
          </div>
        </div>
        <div className="About-text">
          <h2>Our story</h2>
          <p>
            Flako Industries, a reputable company with decades of experience,
            excels in crafting superior products. We take great pride in our
            commitment to quality, evident in our diverse and exquisite
            collection. Embrace excellence with Flako, the unrivaled leader in
            the production industry, as we continue to deliver unmatched
            products and service to our valued customers.
          </p>
          <div className="About-button">
            <button>
              Learn More <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
