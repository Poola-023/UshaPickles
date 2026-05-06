import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import contactImg from '../img/img.png';

// src/pages/Home.jsx

const pickleProducts = [
  { 
    id: 7, 
    name: "Avakaya (Mango) Pickle", 
    category: "Veg Pickles", 
    description: "Traditional Andhra style mango pickle.",
    // ADD THIS PRICES OBJECT:
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: "/src/img/veg_mango_pickle.jpg" 
  },
  { 
    id: 2, 
    name: "Gongura Pickle", 
    category: "Veg Pickles", 
    description: "Tangy and spicy Roselle leaf pickle.",
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: "/src/img/veg_gongura_chilli_pickle.jpg" 
  },
  { 
    id: 10, 
    name: "Chicken Pickle", 
    category: "Non-Veg Pickles", 
    description: "Spicy boneless chicken pickle with aromatic spices.",
    prices: { "1/4 KG": 289, "1/2 KG": 549, "1 KG": 999 }, 
    image: "/src/img/nonveg_chicken_pickle.jpg" 
  },
  { 
    id: 4, 
    name: "Lemon Pickle", 
    category: "Veg Pickles", 
    description: "Zesty and refreshing traditional lemon pickle.",
    prices: { "1/4 KG": 169, "1/2 KG": 319, "1 KG": 599 }, 
    image: "/src/img/veg_lemon_pickle.jpg" 
  }
];

function Home() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[650px] w-full flex items-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={contactImg}
            className="w-full h-full object-cover brightness-[0.35]"
            alt="Traditional Pickles"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col items-start">
            <span className="text-[#ffc107] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Taste the Tradition
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Authentic <br /> Homemade Pickles <br /> Delivered Fresh
            </h1>
            <p className="text-gray-200 text-lg mb-10 max-w-md leading-relaxed">
              Experience the traditional flavors of Andhra with our fiery, aromatic, and perfectly aged homemade recipes. Made with love and the finest ingredients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <button className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-10 py-4 rounded-full font-bold uppercase text-xs transition-all tracking-widest shadow-xl active:scale-95">
                  Shop Now
                </button>
              </Link>
              <Link to="/about">
                <button className="border-2 border-white hover:bg-white hover:text-[#2a1d19] text-white px-10 py-4 rounded-full font-bold uppercase text-xs transition-all tracking-widest active:scale-95">
                  Our Story
                </button>
              </Link>
            </div>
          </div>

          {/* Floating Delivery Sticker */}
          <div className="hidden md:flex justify-end">
            {/* Entire sticker wrapped in a Link to Products */}
            <Link to="/products" className="block transform rotate-3 hover:rotate-0 transition duration-300">
              <div className="bg-[#ffc107] p-8 rounded-3xl rounded-tr-none shadow-2xl text-center cursor-pointer border-b-4 border-[#2a1d19]/20 active:scale-95">
                <p className="text-[#2a1d19] font-bold text-xs uppercase tracking-wider">Free Delivery</p>
                <p className="text-[#2a1d19] font-black text-3xl">ABOVE ₹999</p>
                <div className="mt-2 pt-2 border-t border-[#2a1d19]/20">
                  <p className="text-[#2a1d19] text-[10px] font-bold tracking-[0.2em]">TAP TO SHOP</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* --- FEATURE BAR --- */}
      <div className="bg-[#ffc107] py-5 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-6 text-[#2a1d19] font-bold text-xs uppercase tracking-wide">
          <div className="flex items-center gap-2"><span>🌶️</span> 100% Homemade</div>
          <div className="flex items-center gap-2"><span>🛡️</span> Hygienic Preparation</div>
          <div className="flex items-center gap-2"><span>🚚</span> Delivered with Care</div>
          <div className="flex items-center gap-2"><span>🔒</span> Secure Payment</div>
        </div>
      </div>

      {/* --- BEST SELLERS SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#2a1d19] mb-4">Our Best Sellers</h2>
          <div className="h-1 w-24 bg-[#ffc107] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pickleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <a
        href="https://wa.me/9676045142"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25d366] p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-8 h-8"
          alt="WhatsApp Support"
        />
      </a>

      <Footer />
    </div>
  );
}

export default Home;