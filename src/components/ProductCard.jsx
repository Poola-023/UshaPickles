import { useState } from "react";
import { useCart } from "../context/CartContext"; // Connects to your cart logic

function ProductCard({ product }) {
  // 1. Hook into the Cart Context
  const { addToCart } = useCart();

  // 2. Local state for weight selection (Default to 1/4 KG)
  const [selectedWeight, setSelectedWeight] = useState("1/4 KG");

  // 3. Safety check: Get the price for the selected weight
  const currentPrice = product.prices?.[selectedWeight] || 0;

  // 4. Dynamic Badge Helper
  const getBadgeDetails = (category) => {
    switch (category) {
      case "Veg Pickles":
        return { label: "Veg", styles: "bg-[#e8f5e9] text-[#2e7d32] border-[#2e7d32]/20" };
      case "Non-Veg Pickles":
        return { label: "Non-Veg", styles: "bg-[#ffebee] text-[#c62828] border-[#c62828]/20" };
      case "Powders":
        return { label: "Powder", styles: "bg-[#fff3e0] text-[#e65100] border-[#e65100]/20" };
      case "Home Made Sweets":
        return { label: "Sweet", styles: "bg-[#f3e5f5] text-[#7b1fa2] border-[#7b1fa2]/20" };
      default:
        return { label: "Item", styles: "bg-gray-100 text-gray-600 border-gray-200" };
    }
  };

  const badge = getBadgeDetails(product.category);

  return (
    <div className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group h-full">
      
      {/* Visual Header (Image & Badge) */}
      <div className="relative">
        {/* Dynamic Badge based on category */}
        <div className={`absolute top-5 left-5 z-10 text-[10px] font-black px-3 py-1 rounded-lg border uppercase tracking-tighter shadow-sm ${badge.styles}`}>
          {badge.label}
        </div>
        
        <div className="h-64 w-full overflow-hidden rounded-t-[2.5rem]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="text-xl font-bold text-[#2a1d19] mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs mb-6 flex-grow line-clamp-2 italic px-2">
          {product.description}
        </p>
        
        {/* Selection & Price Box */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl mb-6">
          <select 
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value)}
            className="bg-transparent font-bold text-xs text-[#2a1d19] outline-none cursor-pointer"
          >
            {/* Dynamically list weights from the product data */}
            {product.prices && Object.keys(product.prices).map((weight) => (
              <option key={weight} value={weight}>{weight}</option>
            ))}
          </select>
          <span className="text-xl font-black text-[#d32f2f]">
            ₹{currentPrice}
          </span>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => addToCart(product, selectedWeight, currentPrice)}
          className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-red-100 uppercase text-xs tracking-widest"
        >
          <span className="text-xl">+</span> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;