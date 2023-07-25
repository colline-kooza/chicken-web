import Home from "@/components/Home";
import Link from "next/link";
import Welcome from "@/components/Welcome";
import MainHatches from "@/components/MainHatches";
import NavBar from "@/components/NavBar";
import Coursel from "@/components/Coursel";
import { getDetails, getproducts } from "./lib/getproducts";
import MoreProducts from "@/components/MoreProducts";
import FlakoVedio from "@/components/FlakoVedio";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Works from "@/components/Works";

export default async function Page() {
  const products = await getproducts();
  const detailedProducts = await getDetails();

  return (
    <div className="main">
      <Home />
      <Welcome />
      <MainHatches />
      <Coursel data={products.product} />
      <MoreProducts data={detailedProducts.product} />
      <FlakoVedio />
      <About />
      <Blog />
      <Works />
    </div>
  );
}
