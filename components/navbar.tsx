"use client";

import Link from "next/link";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight text-indigo-600">
          TJ<span className="text-black">ECOM</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          {["/", "/products", "/checkout"].map((href, idx) => (
            <Link
              key={href}
              href={href}
              className="relative group hover:text-indigo-600"
            >
              {["Home", "Products", "Checkout"][idx]}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Side: Cart + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-indigo-600 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white shadow">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-3 font-medium text-gray-800">
            <li>
              <Link href="/" className="block hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-indigo-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-indigo-600">
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
