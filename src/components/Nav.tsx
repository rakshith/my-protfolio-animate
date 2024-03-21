"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "My Projects" },
  { path: "/contact", name: "contact" },
];

type Props = {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
};

const Nav = ({ containerStyles, linkStyles, underlineStyles }: Props) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
