import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidLocationPlus, BiSolidPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import googleImage from "../public/images/google.png";
import Image from "next/image";
export default function Footer() {
  return (
    <div id="footer" className="Footer">
      <div className="footer-icon">
        <img src="/images/flako.png" alt="Flako Industries' skilled team works passionately, crafting unmatched quality products. With decades of experience, we lead the production industry, driven by excellence and innovation. Together, we deliver fine craftsmanship, ensuring customer satisfaction" width={200} height={200} />
        <h2>
          {" "}
          <BiSolidPhoneCall /> +256 774522363
        </h2>
        <h2>
          <BsWhatsapp />
          +256 774522363
        </h2>
        <h2>
          <AiFillMessage />
          +256 774522363
        </h2>
      </div>
      <div className="Footer-Address">
        <h3>
          {" "}
          <BiSolidLocationPlus size={20} color="black" />
          Address
        </h3>
        <Link href="">
          flako poultry Limited is located at BULOBA MITYANA Along side mityana
          road
        </Link>
      </div>
      <div className="Useful-links">
        <h3>For Sales </h3>
        <a href="">+256 774522363</a>
        <h3>For Support </h3>
        <p>Flakoug@gmail.com</p>
      </div>
      <div className="footer-image">
        <Image src={googleImage} alt="Flako Industries' skilled team works passionately, crafting unmatched quality products. With decades of experience, we lead the production industry, driven by excellence and innovation. Together, we deliver fine craftsmanship, ensuring customer satisfaction" width={200} height={200} />
      </div>
    </div>
  );
}
