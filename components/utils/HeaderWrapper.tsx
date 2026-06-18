"use client";

import { useEffect, useRef } from "react";
import Header from "./Header";

export default function HeaderWrapper() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 50) {
        headerRef.current.setAttribute("data-scroll-state", "scrolled");
      } else {
        headerRef.current.setAttribute("data-scroll-state", "top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={headerRef}>
      <Header />
    </div>
  );
}
