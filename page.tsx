import Link from "next/link"
import { products } from "@/lib/products"
import FeaturedSection from "@/components/featured-section"
import CategorySection from "@/components/category-section"

export default function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/placeholder.svg?key=ovne7')",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay sombre pour améliorer la lisibilité du texte avec image de sac */}
        <div className="absolute inset-0 bg-black/40 flex justify-end items-center">
          <div className="relative h-full max-h-[500px] w-auto mr-4 md:mr-12 lg:mr-24 opacity-85 hidden md:block">
            <img
              src="/colorful-backpack-on-wooden-table.png"
              alt="Sac de luxe"
              className="h-full w-auto object-contain drop-shadow-2xl"
              style={{ transform: "scale(0.85) rotate(-5deg)" }}
            />
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md">
                BAGS & BUCKLES
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl drop-shadow">
                Elegance in Every Stitch - Découvrez notre collection de produits élégants et de qualité.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/products"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#0a3277] shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                Voir les produits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedSection products={featuredProducts} />

      {/* Categories */}
      <CategorySection />

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ce que nos clients disent</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Découvrez pourquoi nos clients adorent nos produits.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-sm">
                  <div className="space-y-2">
                    <p className="text-sm leading-none text-gray-500">★★★★★</p>
                    <p className="text-sm text-gray-500">
                      "Produits de qualité exceptionnelle et service client impeccable. Je recommande vivement!"
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                    <div>
                      <p className="text-sm font-medium">Client {i}</p>
                      <p className="text-xs text-gray-500">Client fidèle</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
