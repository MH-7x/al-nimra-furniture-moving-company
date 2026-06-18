"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import logo from "@/public/logo-1.svg";
import Image from "next/image";
import { locationsItems, servicesItems, dubaiSubLocationsItems } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Collapse when scrolled down more than 50 pixels
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mock drop-down datasets

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300">
      {/* 1. TOP BAR */}
      <div
        className={`bg-secondary-foreground text-background text-xs border-b border-foreground/10 md:block hidden transition-all duration-300 ease-in-out ${
          scrolled
            ? "max-h-0 py-0 opacity-0 overflow-hidden border-b-0 pointer-events-none"
            : "max-h-12 py-2 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Booking Info */}
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span className="font-medium">
              عنوان:{" "}
              <address className="not-italic inline">
                46JP+GHP - Al Qouz Ind.second - Al Quoz - Dubai
              </address>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Pinterest"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.166-1.495-.694-2.433-2.878-2.433-4.616 0-3.763 2.73-7.213 7.87-7.213 4.131 0 7.34 2.944 7.34 6.88 0 4.105-2.586 7.41-6.18 7.41-1.209 0-2.345-.626-2.73-1.361l-.744 2.828c-.269 1.027-1 2.317-1.492 3.116 1.12.348 2.31.536 3.546.536 6.62 0 11.987-5.365 11.987-11.987C23.99 5.362 18.624 0 12.017 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE HEADER BAR */}
      <div
        className={`bg-background border-b border-border transition-all duration-300 ease-in-out ${
          scrolled
            ? "max-h-0 py-0 opacity-0 overflow-hidden border-b-0 pointer-events-none"
            : "max-h-32 py-2 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:gap-6 gap-3">
          <div className="md:flex hidden w-full flex-wrap justify-between md:justify-start items-center gap-8 text-sm">
            {/* Location block */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted text-primary flex items-center justify-center rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="block font-bold text-foreground text-xs uppercase tracking-wider mb-1">
                  رقم التليفون
                </span>
                <a
                  href="tel:+9715041767605"
                  dir="ltr"
                  className="not-italic text-sm text-muted-foreground font-medium "
                >
                  054 1767605
                </a>
              </div>
            </div>

            {/* Opening Hours block */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted text-primary flex items-center justify-center rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="block font-bold text-foreground text-xs uppercase tracking-wider mb-1">
                  ساعات العمل
                </span>
                <time className="text-sm text-muted-foreground font-medium">
                  مفتوح 24 ساعة
                </time>
              </div>
            </div>
          </div>
          {/* Logo */}
          <div className="md:w-48 w-44 md:h-12 h-11 relative overflow-hidden">
            <Image
              src={logo}
              alt="شركة النمره نقل اثاث شعار"
              fill
              loading="eager"
              className="object-contain"
            />
          </div>

          {/* Info Blocks (Locations & Opening Hours) */}
        </div>
      </div>

      {/* 3. NAVIGATION BAR */}
      <nav className="bg-secondary-foreground text-background relative z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Responsive Hamburger Checkbox Handler */}
          <input
            type="checkbox"
            id="mobile-menu-checkbox"
            className="peer hidden"
          />

          <div className="flex justify-between items-center md:h-auto py-3 md:py-0">
            {/* Mobile Menu Trigger Button */}
            <label
              htmlFor="mobile-menu-checkbox"
              className="md:hidden flex items-center gap-2 cursor-pointer select-none py-1 px-3 border border-background/20 rounded hover:bg-background/10 transition-colors"
            >
              <svg
                className="w-6 h-6 text-background"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>

            {/* Mobile Get Free Quote Indicator */}
            <a
              href="/quote"
              className="md:hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs uppercase tracking-wider py-2 px-4 rounded transition-colors"
            >
              احصل على عرض أسعار
            </a>

            {/* Main Menu Links Container */}
            <div className="hidden md:flex md:items-center absolute md:relative top-full left-0 w-full md:w-auto bg-secondary-foreground z-40 border-t border-background/10 md:border-none">
              <ul className="flex flex-col md:flex-row md:items-center text-sm font-semibold tracking-wide uppercase">
                {/* Regular Link: About Us */}
                <li>
                  <a
                    href="/about"
                    className="block py-4 px-4 hover:bg-background/10 md:hover:bg-transparent md:hover:text-primary transition-colors border-b border-background/5 md:border-none"
                  >
                    من نحن
                  </a>
                </li>

                {/* Dropdown 1: Services */}
                <li className="relative group border-b border-background/5 md:border-none">
                  <button className="flex items-center gap-1.5 py-5 px-4 hover:text-primary transition-colors focus:outline-none">
                    خدمات
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Hover dropdown list */}
                  <ul className="absolute right-0 top-full hidden group-hover:block bg-white min-w-[220px] py-2 shadow-xl border-t-2 border-primary">
                    {servicesItems.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-foreground/90 hover:text-primary hover:bg-background/5 transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Dropdown 2: Locations */}
                <li className="relative group border-b border-background/5 md:border-none">
                  <button className="flex items-center gap-1.5 py-5 px-4 hover:text-primary transition-colors focus:outline-none">
                    المواقع
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Hover dropdown list */}
                  <ul className="absolute right-0 top-full hidden group-hover:block bg-white min-w-[220px] py-2 shadow-xl border-t-2 border-primary">
                    {locationsItems.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-foreground/90 hover:text-primary hover:bg-background/5 transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Dropdown: Dubai Areas */}
                <li className="relative group border-b border-background/5 md:border-none">
                  <button className="flex items-center gap-1.5 py-5 px-4 hover:text-primary transition-colors focus:outline-none">
                    مناطق دبي
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Hover dropdown list */}
                  <ul className="absolute right-0 top-full hidden group-hover:block bg-white min-w-[220px] py-2 shadow-xl border-t-2 border-primary">
                    {dubaiSubLocationsItems.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-foreground/90 hover:text-primary hover:bg-background/5 transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Regular Link: Blogs */}
                <li>
                  <a
                    href="/blogs"
                    className="block py-4 px-4 hover:bg-background/10 md:hover:bg-transparent md:hover:text-primary transition-colors border-b border-background/5 md:border-none"
                  >
                    مدونات
                  </a>
                </li>

                {/* Regular Link: Contact Us */}
                <li>
                  <a
                    href="/contact"
                    className="block py-4 px-4 hover:bg-background/10 md:hover:bg-transparent md:hover:text-primary transition-colors border-b border-background/5 md:border-none"
                  >
                    اتصل بن
                  </a>
                </li>
              </ul>
            </div>

            {/* Desktop-only Right Side Quote Button */}
            <div className="hidden md:block">
              <a
                href="/quote"
                className="inline-block bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-sm uppercase tracking-wider py-5 px-8 transition-colors"
              >
                الحصول على الاقتباس
              </a>
            </div>
          </div>

          {/* Mobile Menu Container */}
          <div className="hidden peer-checked:block md:hidden h-[calc(100vh-60px)] overflow-y-auto pb-10 w-full bg-secondary-foreground z-40 ">
            <ul className="flex flex-col text-lg font-semibold tracking-wide uppercase">
              {/* Regular Link: About Us */}
              <li>
                <a
                  href="/about"
                  className="block py-4 px-4 hover:bg-background/10 transition-colors border-b border-background/5"
                >
                  من نحن
                </a>
              </li>

              {/* Dropdown 1: Services */}
              <li className="border-b border-background/5">
                <details className="group">
                  <summary className="flex justify-between items-center py-4 px-4 hover:bg-background/10 cursor-pointer list-none">
                    <span>خدمات</span>
                    <svg
                      className="w-4 h-4 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="bg-background/5 pl-4 border-l-2 border-primary/40">
                    {servicesItems.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="block py-3 px-4 text-sm text-background/80 hover:text-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              {/* Dropdown 2: Locations */}
              <li className="border-b border-background/5">
                <details className="group">
                  <summary className="flex justify-between items-center py-4 px-4 hover:bg-background/10 cursor-pointer list-none">
                    <span>المواقع</span>
                    <svg
                      className="w-4 h-4 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="bg-background/5 pl-4 border-l-2 border-primary/40">
                    {locationsItems.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="block py-3 px-4 text-sm text-background/80 hover:text-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              {/* Dropdown: Dubai Areas */}
              <li className="border-b border-background/5">
                <details className="group">
                  <summary className="flex justify-between items-center py-4 px-4 hover:bg-background/10 cursor-pointer list-none">
                    <span>مناطق دبي</span>
                    <svg
                      className="w-4 h-4 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="bg-background/5 pl-4 border-l-2 border-primary/40">
                    {dubaiSubLocationsItems.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="block py-3 px-4 text-sm text-background/80 hover:text-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              {/* Regular Link: Blogs */}
              <li>
                <a
                  href="/blogs"
                  className="block py-4 px-4 hover:bg-background/10 transition-colors border-b border-background/5"
                >
                  مدونات
                </a>
              </li>

              {/* Regular Link: Contact Us */}
              <li>
                <a
                  href="/contact"
                  className="block py-4 px-4 hover:bg-background/10 transition-colors border-b border-background/5"
                >
                  اتصل بن
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
