import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "../components/ui/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="rounded bg-gradient-to-r from-white to-neutral-100 py-12 sm:py-20">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-12 px-6 sm:px-12">
          
          {/* Left Side: Text */}
          <div className="max-w-lg space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Welcome to <span className="text-indigo-600">My Ecommerce</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the latest products at unbeatable prices. Start your shopping journey now!
            </p>
            <Button
              asChild
              className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg transition duration-300"
            >
              <Link href="/products">
                Browse All Products
              </Link>
            </Button>
          </div>

          {/* Right Side: Image */}
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              alt="Hero Product"
              src={products.data[0].images[0]}
              className="rounded-xl shadow-lg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-white">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Featured Products</h3>
        <div className="px-4 sm:px-8 md:px-16">
          <Carousel products={products.data} />
        </div>
      </section>
    </div>
  );
}
