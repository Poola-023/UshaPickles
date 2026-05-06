import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

// --- 1. IMPORT ALL IMAGES ---
import amlaImg from '../img/veg_amla_pickle.jpg';
import gingerImg from '../img/veg_ginger_pickle.jpg';
import gonguraChilliImg from '../img/veg_gongura_chilli_pickle.jpg';
import gonguraPanduImg from '../img/veg_gongura_pandu_pickle.jpg';
import kakarakaiImg from '../img/veg_kakarakai_pickle.jpg';
import lemonImg from '../img/veg_lemon_pickle.jpg';
import mangoImg from '../img/veg_mango_pickle.jpg';
import mixedImg from '../img/veg_mixed_pickle.jpg';
import tomatoImg from '../img/veg_tomato_pickle.jpg';

import chickenBoneImg from '../img/nonveg_chicken_pickle.jpg';
import chickenBonelessImg from '../img/nonveg_chicken_boneless.jpg';
import gonguraChickenImg from '../img/nonveg_gongura_chicken.jpg';
import muttonImg from '../img/nonveg_mutton_boneless_pickle.jpg';
import prawnImg from '../img/nonveg_prawn_pickle.jpg';

import chilliPowderImg from '../img/fine_chilli_powder.jpg';
import biryaniMasalaImg from '../img/biryani_masala.jpg';
import karivepakuImg from '../img/karevepaku_karam.jpg';
import munagakuImg from '../img/powder_munagaku.jpg';
import nuvvuluImg from '../img/nuvvulu.jpg';

import gheeImg from '../img/buffalo_ghee.jpg';
import dryFruitLadduImg from '../img/sweet_dry_fruit_laddu.jpg';
import sunnundaImg from '../img/sweet_kajju_sunnunda.jpg';

const allProducts = [
  { 
    id: 1, 
    name: "Amla Pickle", 
    category: "Veg Pickles", 
    description: "Traditional Indian style extra red and spicy Amla pickle in a premium jar.", 
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: amlaImg 
  },
  { 
    id: 2, 
    name: "Ginger Pickle", 
    category: "Veg Pickles", 
    description: "Authentic ginger paste pickle with a perfect balance of spice and tang.", 
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: gingerImg 
  },
  { 
    id: 3, 
    name: "Gongura Chilli Pickle", 
    category: "Veg Pickles", 
    description: "Fiery green chillies blended with tangy sorrel leaves (Gongura).", 
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: gonguraChilliImg 
  },
  { 
    id: 4, 
    name: "Gongura Pandu Mirchi Pickle", 
    category: "Veg Pickles", 
    description: "Ripe red chillies and Gongura leaves crafted for an explosion of flavor.", 
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: gonguraPanduImg 
  },
  { 
    id: 5, 
    name: "Kakarakai (Bitter Gourd) Pickle", 
    category: "Veg Pickles", 
    description: "Nutritious bitter gourd pieces treated with traditional spices to perfection.", 
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: kakarakaiImg 
  },
  { 
    id: 6, 
    name: "Lemon Pickle", 
    category: "Veg Pickles", 
    description: "Classic sun-cured lemons with a thick, spicy, and tangy gravy.", 
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: lemonImg 
  },
  { 
    id: 7, 
    name: "Mango (Avakaya) Pickle", 
    category: "Veg Pickles", 
    description: "The King of pickles—authentic Andhra Avakaya with mustard and oil.", 
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: mangoImg 
  },
  { 
    id: 8, 
    name: "Mixed Vegetable Pickle", 
    category: "Veg Pickles", 
    description: "A colorful blend of seasonal vegetables preserved in aromatic spices.", 
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: mixedImg 
  },
  { 
    id: 9, 
    name: "Tomato Pickle", 
    category: "Veg Pickles", 
    description: "Tangy, sun-dried tomatoes finely chopped and aged in a glass jar.", 
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: tomatoImg 
  },
  // --- NON-VEG PICKLES ---
  { 
    id: 10, 
    name: "Chicken Pickle (With Bone)", 
    category: "Non-Veg Pickles", 
    description: "Spicy and aromatic chicken pickle made with traditional bone-in pieces.", 
    prices: { "1/4 KG": 289, "1/2 KG": 549, "1 KG": 999 }, 
    image: chickenBoneImg 
  },
  { 
    id: 11, 
    name: "Boneless Chicken Pickle", 
    category: "Non-Veg Pickles", 
    description: "Tender boneless chicken chunks marinated in premium spices and oil.", 
    prices: { "1/4 KG": 289, "1/2 KG": 549, "1 KG": 999 }, 
    image: chickenBonelessImg 
  },
  { 
    id: 12, 
    name: "Gongura Chicken Pickle", 
    category: "Non-Veg Pickles", 
    description: "The perfect blend of tangy Gongura leaves and spicy chicken.", 
    prices: { "1/4 KG": 289, "1/2 KG": 549, "1 KG": 999 }, 
    image: gonguraChickenImg 
  },
  { 
    id: 13, 
    name: "Mutton Boneless Pickle", 
    category: "Non-Veg Pickles", 
    description: "Rich and flavorful boneless mutton pickle, a true delicacy.", 
    prices: { "1/4 KG": 350, "1/2 KG": 680, "1 KG": 1250 }, // Example higher price for Mutton
    image: muttonImg 
  },
  { 
    id: 14, 
    name: "Prawn Pickle", 
    category: "Non-Veg Pickles", 
    description: "Freshly caught prawns pickled with a fiery spice mix.", 
    prices: { "1/4 KG": 289, "1/2 KG": 549, "1 KG": 999 }, 
    image: prawnImg 
  },

  // --- POWDERS ---
  { 
    id: 20, 
    name: "Fine Chilli Powder", 
    category: "Powders", 
    description: "Superior quality sun-dried chillies ground to a fine, spicy powder.", 
    prices: { "1/4 KG": 100, "1/2 KG": 190, "1 KG": 350 }, // Update as needed
    image: chilliPowderImg 
  },
  { 
    id: 21, 
    name: "Biryani Masala", 
    category: "Powders", 
    description: "A secret blend of whole spices for the perfect homemade Biryani.", 
    prices: { "1/4 KG": 150, "1/2 KG": 280, "1 KG": 500 }, 
    image: biryaniMasalaImg 
  },
  { 
    id: 22, 
    name: "Karivepaku (Curry Leaf) Karam", 
    category: "Powders", 
    description: "Healthy and tasty curry leaf spice powder, perfect for rice and idli.", 
    prices: { "1/4 KG": 120, "1/2 KG": 220, "1 KG": 400 }, 
    image: karivepakuImg 
  },
  { 
    id: 23, 
    name: "Munagaku (Moringa) Powder", 
    category: "Powders", 
    description: "Superfood Moringa leaves processed into a nutritious spice blend.", 
    prices: { "1/4 KG": 130, "1/2 KG": 240, "1 KG": 450 }, 
    image: munagakuImg 
  },
  { 
    id: 24, 
    name: "Nuvvulu (Sesame) Powder", 
    category: "Powders", 
    description: "Roasted sesame seeds ground into a flavorful, nutty powder.", 
    prices: { "1/4 KG": 110, "1/2 KG": 200, "1 KG": 380 }, 
    image: nuvvuluImg 
  },

  // --- HOME MADE SWEETS ---
  { 
    id: 30,
    name: "Buffalo Ghee", 
    category: "Home Made Sweets", 
    description: "Pure, aromatic homemade buffalo ghee with a traditional grainy texture.", 
    prices: { "1/4 KG": 229, "1/2 KG": 449, "1 KG": 899 }, // Ghee usually sold in larger units
    image: gheeImg 
  },
  { 
    id: 31, 
    name: "Dry Fruit Laddu", 
    category: "Home Made Sweets", 
    description: "Healthy and sugar-free laddus packed with premium dry fruits and nuts.", 
    prices: { "1/4 KG": 250, "1/2 KG": 480, "1 KG": 900 }, 
    image: dryFruitLadduImg 
  },
  { 
    id: 32, 
    name: "Kajju Sunnunda", 
    category: "Home Made Sweets", 
    description: "Traditional Urad Dal laddus enriched with cashews and pure ghee.", 
    prices: { "1/4 KG": 200, "1/2 KG": 380, "1 KG": 700 }, 
    image: sunnundaImg 
  }
];

function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const categories = ["All Products", "Veg Pickles", "Non-Veg Pickles", "Powders", "Home Made Sweets"];

  const filteredProducts = activeCategory === "All Products" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#fdfbf7] min-h-screen">
      <Navbar />

      {/* --- PREMIUM BANNER (Matches target site) --- */}
      <div className="bg-gradient-to-r from-[#4a0e0e] to-[#d32f2f] py-20 text-center shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-24 h-24 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-yellow-400 rounded-full"></div>
        </div>
        
        <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
           Our Pickles & Powders
        </h1>
        <div className="flex justify-center items-center gap-2 text-[#ffc107] font-bold text-sm uppercase tracking-[0.2em]">
          <span>Home</span>
          <span className="text-white/50">/</span>
          <span>Products</span>
        </div>
      </div>

      {/* --- CATEGORY FILTERS (Suravi Style) --- */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 transform ${
                activeCategory === cat 
                ? "bg-[#d32f2f] text-white shadow-xl scale-105 border-transparent" 
                : "bg-white text-gray-700 border border-gray-200 hover:border-[#d32f2f] hover:text-[#d32f2f]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- PRODUCT GRID --- */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Products;