"use client";
import Link from "next/link";
import { animate, motion, useAnimation } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import React, { useState } from "react";
import Image from "next/image";
import About from "./About";

export default function NavBar() {
  const navVabrants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  const [showNavBar, setShowNavBar] = useState(false);
  function changeNav() {
    setShowNavBar(!showNavBar);
  }
  return (
    <div className="Nav-bar">
      <div className="nav-icon">
        <Image
          src="/../public/images/chicken.png"
          alt=""
          width="100"
          height="100"
        />
        <h2>FLAKO LTD</h2>
      </div>
      <motion.div
        variants={navVabrants}
        initial="hidden"
        animate="show"
        className={showNavBar ? " nav-links display-links " : " nav-links"}
      >
        <Link href="#about">About us</Link>
        <hr />
        <Link href="#products">Products</Link>
        <hr />
        <Link href="#footer">Contact us</Link>
        <hr />
        <Link href="#blogs">Blogs</Link>
        <hr />
      </motion.div>
      <div className="menu-bar">
        <a onClick={changeNav} href="#">
          <HiOutlineMenuAlt3 size={25} />
        </a>
      </div>
    </div>
  );
}
