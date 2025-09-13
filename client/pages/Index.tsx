import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

const newArrival = [
  {
    title: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: 900,
    status: "IN STOCK" as const,
    subtitle: "iPhone",
    image: "/images/new-iphone.png",
  },
  {
    title: "Blackmagic Pocket Cinema Camera 6k",
    price: 2535,
    status: "CALL US" as const,
    subtitle: "Camera",
    image: "/images/new-camera.png",
  },
  {
    title: "Apple Watch Series 9 41mm Starlight Aluminium Case",
    price: 399,
    status: "IN STOCK" as const,
    subtitle: "Watch",
    image: "/images/new-watch-1.png",
  },
  {
    title: "AirPods Max Silver",
    price: 549,
    status: "IN STOCK" as const,
    subtitle: "Headphones",
    image: "/images/new-headphones.png",
  },
  {
    title: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
    status: "IN STOCK" as const,
    subtitle: "Watch",
    image: "/images/new-watch-2.png",
  },
  {
    title: "Galaxy Z Fold5 Unlocked 256GB Phantom Black",
    price: 1799,
    status: "IN STOCK" as const,
    subtitle: "Phone",
    image: "/images/new-phone-fold.png",
  },
  {
    title: "Galaxy Buds FE Graphite",
    price: 99,
    status: "IN STOCK" as const,
    subtitle: "Earbuds",
    image: "/images/new-earbuds.png",
  },
  {
    title: "Apple iPad 9 10.2 64GB Wi‑Fi Silver (2021)",
    price: 429,
    status: "IN STOCK" as const,
    subtitle: "Tablet",
    image: "/images/new-tablet.png",
  },
];

const discounts = [
  {
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1399,
    oldPrice: 1499,
    status: "SALE" as const,
    subtitle: "Phone",
    image: "/images/discount-phone-1.png",
  },
  {
    title: "AirPods Max Silver",
    price: 549,
    oldPrice: 620,
    status: "SALE" as const,
    subtitle: "Headphones",
    image: "/images/discount-headphones.png",
  },
  {
    title: "Apple Watch Series 9 41mm Starlight Aluminium Case",
    price: 399,
    oldPrice: 435,
    status: "SALE" as const,
    subtitle: "Watch",
    image: "/images/discount-watch.png",
  },
  {
    title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: 1499,
    oldPrice: 1599,
    status: "SALE" as const,
    subtitle: "Phone",
    image: "/images/discount-phone-2.png",
  },
];

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section
        className="text-white"
        style={{
          background: "linear-gradient(91deg, #211C24 0.64%, #211C24 101%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-40 pt-16 lg:pt-20 pb-0">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex-1 min-w-96">
              <p
                className="text-white/40 text-2xl font-semibold mb-6"
                style={{
                  fontFamily:
                    "Figtree, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Pro.Beyond.
              </p>
              <h1
                className="text-6xl lg:text-8xl font-semibold leading-tight tracking-tight mb-6"
                style={{ letterSpacing: "-0.96px" }}
              >
                IPhone 16 <span className="block">Pro</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Created to change everything for the better. For everyone
              </p>
              <button className="border border-white text-white px-14 py-4 rounded-md text-base font-medium hover:bg-white/10 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="flex-shrink-0 flex items-end h-[420px] sm:h-[480px] lg:h-[560px]">
              <img
                src="/images/hero-iphone16pro.png"
                alt="iPhone 16 Pro"
                className="h-full w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">New Arrival</h2>
          <Button variant="link" className="text-blue-600">
            Shop Now
          </Button>
        </div>
        <Tabs defaultValue="new" className="mt-4">
          <TabsList>
            <TabsTrigger value="new">New Arrival</TabsTrigger>
            <TabsTrigger value="best">Bestseller</TabsTrigger>
          </TabsList>
          <TabsContent value="new">
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {newArrival.map((p) => (
                <ProductCard key={p.title} product={p} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="best">
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {newArrival
                .slice(0, 8)
                .reverse()
                .map((p) => (
                  <ProductCard key={p.title} product={p} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Mission & Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-full px-0 pt-5 pb-8">
          <div className="text-center mb-4">
            <h3
              className="text-base font-semibold tracking-widest uppercase"
              style={{ color: "#CCBF81" }}
            >
              Our Mission and Values
            </h3>
            <h2 className="mt-2 text-3xl font-bold text-gray-600">
              Powering Everyday Life with Technology
            </h2>
            <p className="mt-3 text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At 3DPlanet, our mission is to bring the latest innovations in
              electronics closer to our customers by offering high-quality
              products, expert advice, and trusted service. We are committed to
              building long-term relationships founded on trust, reliability,
              and customer satisfaction while making technology accessible for
              everyone.
            </p>
          </div>

          <div className="bg-blue-50 p-12 rounded-lg">
            <div
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
              style={{ gridAutoRows: "1fr" }}
            >
              <ValueCard
                title="Trust"
                desc="We believe in honest pricing, reliable products, and transparent service. Trust is the foundation of our relationship with every customer who chooses us for their needs."
                icon={
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path
                      d="M27.1666 17.8333C27.1666 24.4999 22.4999 27.8333 16.9533 29.7666C16.6628 29.865 16.3473 29.8603 16.0599 29.7533C10.4999 27.8333 5.83325 24.4999 5.83325 17.8333V8.49995C5.83325 8.14633 5.97373 7.80719 6.22378 7.55714C6.47383 7.30709 6.81296 7.16662 7.16659 7.16662C9.83325 7.16662 13.1666 5.56662 15.4866 3.53995C15.7691 3.29861 16.1284 3.16602 16.4999 3.16602C16.8714 3.16602 17.2308 3.29861 17.5133 3.53995C19.8466 5.57995 23.1666 7.16662 25.8333 7.16662C26.1869 7.16662 26.526 7.30709 26.7761 7.55714C27.0261 7.80719 27.1666 8.14633 27.1666 8.49995V17.8333Z"
                      stroke="#58B353"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 16.4999L15.1667 19.1666L20.5 13.8333"
                      stroke="#58B353"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
              <ValueCard
                title="Quality"
                desc="We provide only the best electronics from globally recognized brands. Every product we offer goes through careful selection to ensure long-lasting quality and performance."
                icon={
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path
                      d="M14.5001 4.5L11.1667 12.5L16.5001 29.8333L21.8334 12.5L18.5001 4.5"
                      stroke="#4E90E3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.1667 4.5C23.5807 4.5 23.989 4.59639 24.3593 4.78153C24.7296 4.96667 25.0516 5.23548 25.3 5.56667L29.3 10.9C29.6431 11.3576 29.83 11.9133 29.8331 12.4851C29.8362 13.057 29.6554 13.6147 29.3174 14.076L18.664 28.724C18.417 29.0673 18.0919 29.347 17.7155 29.5398C17.3392 29.7327 16.9223 29.8333 16.4994 29.8333C16.0764 29.8333 15.6596 29.7327 15.2832 29.5398C14.9068 29.347 14.5817 29.0673 14.3347 28.724L3.68137 14.076C3.34352 13.6146 3.16294 13.0568 3.16631 12.4849C3.16967 11.913 3.35678 11.3574 3.70004 10.9L7.69737 5.57067C7.94561 5.23838 8.26795 4.96858 8.63875 4.78272C9.00955 4.59686 9.41859 4.50005 9.83337 4.5H23.1667Z"
                      stroke="#4E90E3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.16675 12.5H29.8334"
                      stroke="#4E90E3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
              <ValueCard
                title="Service"
                desc="We value customer support and guidance at every step — from choosing the right device to after-sales care. Our team ensures smooth communication and genuine assistance."
                icon={
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path
                      d="M4.5 15.1667H8.5C9.20724 15.1667 9.88552 15.4477 10.3856 15.9478C10.8857 16.4479 11.1667 17.1262 11.1667 17.8334V21.8334C11.1667 22.5407 10.8857 23.2189 10.3856 23.719C9.88552 24.2191 9.20724 24.5001 8.5 24.5001H7.16667C6.45942 24.5001 5.78115 24.2191 5.28105 23.719C4.78095 23.2189 4.5 22.5407 4.5 21.8334V15.1667ZM4.5 15.1667C4.5 13.5909 4.81039 12.0305 5.41345 10.5745C6.0165 9.11864 6.90042 7.79577 8.01472 6.68147C9.12902 5.56716 10.4519 4.68325 11.9078 4.08019C13.3637 3.47714 14.9241 3.16675 16.5 3.16675C18.0759 3.16675 19.6363 3.47714 21.0922 4.08019C22.5481 4.68325 23.871 5.56716 24.9853 6.68147C26.0996 7.79577 26.9835 9.11864 27.5866 10.5745C28.1896 12.0305 28.5 13.5909 28.5 15.1667M28.5 15.1667V21.8334C28.5 22.5407 28.219 23.2189 27.719 23.719C27.2189 24.2191 26.5406 24.5001 25.8333 24.5001H24.5C23.7928 24.5001 23.1145 24.2191 22.6144 23.719C22.1143 23.2189 21.8333 22.5407 21.8333 21.8334V17.8334C21.8333 17.1262 22.1143 16.4479 22.6144 15.9478C23.1145 15.4477 23.7928 15.1667 24.5 15.1667H28.5Z"
                      stroke="#58B353"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.5 21.8333V24.4999C28.5 25.9144 27.9381 27.271 26.9379 28.2712C25.9377 29.2713 24.5812 29.8333 23.1667 29.8333H16.5"
                      stroke="#58B353"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
              <ValueCard
                title="Innovation"
                desc="We embrace the latest tech trends and constantly update our catalog with new gadgets, smart devices, and future-ready electronics to keep our customers ahead."
                icon={
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path
                      d="M20.5 19.1667C20.7667 17.8334 21.4333 16.9001 22.5 15.8334C23.8333 14.6334 24.5 12.9001 24.5 11.1667C24.5 9.04502 23.6571 7.01018 22.1569 5.50989C20.6566 4.0096 18.6217 3.16675 16.5 3.16675C14.3783 3.16675 12.3434 4.0096 10.8431 5.50989C9.34286 7.01018 8.5 9.04502 8.5 11.1667C8.5 12.5001 8.76667 14.1001 10.5 15.8334C11.4333 16.7667 12.2333 17.8334 12.5 19.1667"
                      stroke="#4E90E3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 24.5H20.5"
                      stroke="#4E90E3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.8333 29.8333H19.1666"
                      stroke="#4E90E3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products tiles */}
      <section className="mx-auto max-w-full px-0 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <PromoCard
            title="Popular Products"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            bgClass="bg-white"
            textClass="text-black"
            buttonVariant="black"
            images={[
              {
                src: "/images/promo-popular-1.png",
                className: "w-100 absolute drop-shadow-xl  right-[50px] top-[-65px]",
              },
              {
                src: "/images/promo-popular-2.png",
                className: "w-100 absolute drop-shadow-xl left-[15%] scale-[0.7]",
              },
            ]}
          />

          <PromoCard
            title="Ipad Pro"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            bgClass="bg-[#F9F9F9]"
            textClass="text-black"
            buttonVariant="black"
            images={[
              { src: "/images/promo-ipad-pro.png", className: "w-full absolute drop-shadow-xl left-[60px] top-[-20px]" },
            ]}
          />

          <PromoCard
            title="Samsung Galaxy"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            bgClass="bg-[#EAEAEA]"
            textClass="text-black"
            buttonVariant="black"
            images={[{ src: "/images/promo-samsung.png", className: "w-full object-cover" }]}
          />

          <PromoCard
            title="Macbook Pro"
            description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            bgClass="bg-[#2C2C2C]"
            textClass="text-white"
            buttonVariant="white"
            images={[{ src: "/images/promo-macbook.png", className: "w-full absolute left-[90px]" }]}
          />
        </div>
      </section>

      {/* Discounts */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="mb-4 text-xl font-semibold">Discount</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {discounts.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ValueCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center gap-3 h-64 w-58">
      <div className="flex-shrink-0">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-600">{title}</h3>
      <p className="text-xs text-gray-500 leading-tight">{desc}</p>
    </div>
  );
}

type PromoImage = { src: string; className?: string };

function PromoCard({
  title,
  description,
  bgClass,
  textClass,
  buttonVariant,
  images,
}: {
  title: string;
  description: string;
  bgClass: string;
  textClass: string;
  buttonVariant: "white" | "black";
  images: PromoImage[];
}) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden ${bgClass} flex flex-col h-full`}
    >
      <div className="w-full h-[325px] relative overflow-hidden">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt=""
            className={`block w-full h-full object-contain ${img.className || ""}`}
          />
        ))}
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className={`text-2xl font-medium ${textClass}`}>{title}</div>
          <p
            className={`mt-2 text-sm ${textClass === "text-white" ? "text-gray-300" : "text-gray-500"}`}
          >
            {description}
          </p>
        </div>
        <div className="mt-4">
          <button
            className={`px-6 py-2 rounded border ${buttonVariant === "white" ? "border-white text-white" : "border-black text-black"} hover:opacity-80`}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
