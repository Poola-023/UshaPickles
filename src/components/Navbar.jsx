import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false); // Controls mobile menu toggle

  return (
    <nav className="bg-[#2a1d19] py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-xl">
      {/* Brand Logo */}
      <Link to="/" className="text-white text-2xl font-serif font-bold italic tracking-tighter">
        Usha Pickles
      </Link>

      {/* DESKTOP MENU (Hidden on Mobile) */}
      <div className="hidden md:flex gap-8 items-center text-xs font-bold uppercase tracking-widest text-white">
        <Link to="/" className="hover:text-[#ffc107] transition">Home</Link>
        <Link to="/products" className="hover:text-[#ffc107] transition">Products</Link>
        <Link to="/about" className="hover:text-[#ffc107] transition">About Us</Link>
        <Link to="/contact" className="hover:text-[#ffc107] transition">Contact</Link>
        
        <Link to="/cart" className="relative p-2 bg-[#d32f2f] rounded-full hover:scale-110 transition-transform">
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#ffc107] text-[#2a1d19] text-[10px] h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#2a1d19]">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* MOBILE TOGGLE & CART (Visible on Mobile) */}
      <div className="md:hidden flex items-center gap-5">
        <Link to="/cart" className="relative p-2 bg-[#d32f2f] rounded-full">
          <ShoppingCart size={20} className="text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#ffc107] text-[#2a1d19] text-[10px] h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#2a1d19]">
              {cartCount}
            </span>
          )}
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN OVERLAY */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#2a1d19] border-t border-white/10 p-8 flex flex-col gap-6 text-white font-bold uppercase text-sm md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#ffc107]">Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="hover:text-[#ffc107]">Products</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#ffc107]">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#ffc107]">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;