import { Heart } from "lucide-react";

type Product = {
  title: string;
  price: number | string;
  oldPrice?: number | string;
  status?: "IN STOCK" | "CALL US" | "SALE";
  image?: string;
  subtitle?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { title, price, oldPrice, status, image } = product;

  const getStatusBadge = () => {
    if (!status) return null;

    let bgColor = "";
    let textColor = "text-white";

    switch (status) {
      case "IN STOCK":
        bgColor = "bg-green-600";
        break;
      case "CALL US":
        bgColor = "bg-yellow-400";
        textColor = "text-gray-800";
        break;
      case "SALE":
        bgColor = "bg-red-500";
        break;
    }

    return (
      <div
        className={`absolute left-6 top-6 ${bgColor} ${textColor} px-3 py-1 rounded text-xs font-medium`}
      >
        {status}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center gap-4 min-w-[200px] flex-1 h-full">
      {/* Top Section with Status and Icons */}
      <div className="relative w-full h-8">
        {getStatusBadge()}

        <div className="absolute right-0 top-0 flex gap-2">
          {/* Compare Icon */}
          <button aria-label="Compare">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M21.6667 13L25.6667 9M25.6667 9L21.6667 5M25.6667 9L7 9V13M11 18.3333L7 22.3333M7 22.3333L11 26.3333M7 22.3333L25.6667 22.3333V18.3333"
                stroke="#A8A8A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Heart Icon */}
          <button aria-label="Wishlist">
            <Heart className="h-8 w-8 text-gray-400 stroke-2" />
          </button>
        </div>
      </div>

      {/* Product Image */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "160px" }}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-full object-contain"
            style={{ height: "160px" }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center gap-4 w-full flex-1">
        <div className="text-center">
          <h3 className="text-base font-medium text-black leading-6">
            {title}
          </h3>
        </div>

        {/* Price */}
        <div className="w-full mt-auto">
          <div className="bg-blue-600 text-white text-center py-2 rounded-lg font-semibold text-xl tracking-wide">
            {oldPrice && (
              <span className="text-gray-800 line-through mr-2">
                {typeof oldPrice === "number" ? `$${oldPrice}` : oldPrice}
              </span>
            )}
            {typeof price === "number" ? `$${price}` : price}
          </div>
        </div>
      </div>
    </div>
  );
}
