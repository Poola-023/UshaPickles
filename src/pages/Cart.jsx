import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  const deliveryCharge = subtotal > 999 || subtotal === 0 ? 0 : 50;
  const totalAmount = subtotal + deliveryCharge;

  return (
    <div className="bg-[#fdfbf7] min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* BANNER: Adjusted padding and text size for mobile */}
      <div className="bg-gradient-to-r from-[#4a0e0e] to-[#d32f2f] py-10 md:py-16 text-center shadow-2xl px-4">
        <h1 className="text-white text-3xl md:text-5xl font-serif font-bold mb-2">Shopping Cart</h1>
        <p className="text-[#ffc107] text-xs md:text-sm font-bold uppercase tracking-widest">Home / Cart</p>
      </div>

      <div className="flex-grow py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {cartItems.length === 0 ? (
            /* EMPTY STATE: Responsive rounded corners and padding */
            <div className="text-center py-12 md:py-20 bg-white rounded-2xl md:rounded-[3rem] shadow-sm border border-gray-100">
              <ShoppingBag size={48} className="mx-auto mb-6 text-gray-200 md:w-16 md:h-16" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2a1d19] mb-4">Your cart is empty</h2>
              <Link to="/products">
                <button className="bg-[#d32f2f] text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold uppercase text-xs md:text-sm hover:bg-[#b71c1c] transition-all">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            /* ACTIVE CART: Grid handles stacking automatically */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              
              {/* LEFT: ITEMS LIST */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                {cartItems.map((item) => (
                  /* ITEM CARD: Flex-col on mobile, flex-row on small screens up */
                  <div key={`${item.id}-${item.weight}`} className="bg-white p-4 md:p-6 rounded-xl md:rounded-[2rem] shadow-sm border border-gray-50 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                    <img src={item.image} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl md:rounded-2xl shadow-sm" />
                    
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-lg md:text-xl font-bold text-[#2a1d19]">{item.name}</h3>
                      <p className="text-[#d32f2f] font-bold text-[10px] md:text-xs">{item.weight}</p>
                      <p className="text-gray-400 font-bold mt-1 text-sm md:text-base">₹{item.price}</p>
                    </div>

                    {/* CONTROLS & DELETE: Grouped for better mobile spacing */}
                    <div className="flex items-center gap-4 md:gap-6 pt-2 sm:pt-0">
                      <div className="flex items-center gap-3 md:gap-4 bg-gray-50 p-1.5 md:p-2 rounded-xl border border-gray-100">
                        <button 
                          onClick={() => updateQuantity(item.id, item.weight, -1)}
                          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-lg md:rounded-xl shadow-sm hover:text-[#d32f2f] active:scale-90 transition-transform"
                        >
                          <Minus size={14} className="md:w-4 md:h-4" />
                        </button>
                        <span className="font-black text-base md:text-lg w-5 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.weight, 1)}
                          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-lg md:rounded-xl shadow-sm hover:text-[#d32f2f] active:scale-90 transition-transform"
                        >
                          <Plus size={14} className="md:w-4 md:h-4" />
                        </button>
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.id, item.weight)}
                        className="text-gray-300 hover:text-red-600 p-2 transition-colors"
                      >
                        <Trash2 size={20} className="md:w-6 md:h-6" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* SUMMARY SIDEBAR: Optimized padding and font sizes */}
              <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[3rem] shadow-2xl h-fit border border-gray-50">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 md:mb-8 text-[#2a1d19] border-b pb-4">Order Summary</h3>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm md:text-base">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span className={deliveryCharge === 0 ? "text-green-600 font-bold" : "font-bold"}>
                      {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 md:py-6 border-t border-gray-100 mb-6 md:mb-8">
                  <span className="text-lg md:text-xl font-bold text-[#2a1d19]">Total</span>
                  <span className="text-2xl md:text-3xl font-black text-[#d32f2f]">₹{totalAmount}</span>
                </div>

                <Link to="/checkout" className="block w-full">
                  <button className="w-full bg-[#d32f2f] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#b71c1c] active:scale-[0.98] transition-all uppercase tracking-widest text-xs md:text-sm shadow-xl shadow-red-100">
                    Proceed to Checkout <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;