import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, ShieldCheck, QrCode, Truck, Phone, User, MapPin, MessageSquare, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {
  const { cartItems, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  // 1. Form State
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    pincode: ""
  });

  // 2. Order Calculations
  const deliveryCharge = subtotal > 999 || subtotal === 0 ? 0 : 50;
  const totalAmount = subtotal + deliveryCharge;
  
  // 3. Business Details
  const myUpiId = "9133424340@ptsbi"; // Your UPI ID
  const myWhatsAppNumber = "919133424340"; // Your Number with Country Code

  // 4. WhatsApp Automation Logic
  const handlePaymentDone = () => {
    // Validation
    if (!formData.name || !formData.mobile || !formData.address) {
      alert("Please provide your delivery details first!");
      return;
    }

    // Format item list for the message
    const itemsList = cartItems
      .map((item) => `• ${item.name} (${item.weight}) x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join("\n");

    // Construct the WhatsApp message
    const message = encodeURIComponent(
      `🛍️ *NEW ORDER - USHA PICKLES*\n\n` +
      `👤 *Customer:* ${formData.name}\n` +
      `📞 *Mobile:* ${formData.mobile}\n` +
      `📍 *Address:* ${formData.address}, ${formData.city} - ${formData.pincode}\n\n` +
      `📦 *Items List:*\n${itemsList}\n\n` +
      `💰 *Total Amount:* ₹${totalAmount}\n` +
      `✅ *Payment:* Done via UPI (${myUpiId})\n\n` +
      `Please confirm my order and share the dispatch date! Thank you.`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${message}`, "_blank");

    // Clear cart and go home
    clearCart();
    navigate("/");
  };

  // 5. UPI QR Generation
  const upiLink = `upi://pay?pa=${myUpiId}&pn=UshaPickles&am=${totalAmount}&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

  return (
    <div className="bg-[#fdfbf7] min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* --- PAGE BANNER --- */}
      <div className="bg-gradient-to-r from-[#4a0e0e] to-[#d32f2f] py-16 text-center shadow-2xl relative">
        <h1 className="text-white text-5xl font-serif font-bold mb-2 drop-shadow-md">Checkout</h1>
        <p className="text-[#ffc107] text-sm font-bold uppercase tracking-[0.2em]">Complete Your Order</p>
      </div>

      <div className="flex-grow py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* --- LEFT: DELIVERY DETAILS --- */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h2 className="text-4xl font-serif font-bold text-[#d32f2f] mb-8">Delivery Details</h2>
            
            <div className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:border-[#d32f2f] outline-none transition-all" 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:border-[#d32f2f] outline-none transition-all" 
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-5 text-gray-400" size={20} />
                <textarea 
                  rows="3" 
                  placeholder="Complete Address (Flat No, Street, Landmark)" 
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:border-[#d32f2f] outline-none resize-none"
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="City" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 outline-none" onChange={(e) => setFormData({...formData, city: e.target.value})} />
                <input type="text" placeholder="Pincode" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 outline-none" onChange={(e) => setFormData({...formData, pincode: e.target.value})} />
              </div>
            </div>

            <div className="mt-10 p-6 bg-orange-50 rounded-[2rem] border border-[#ffc107]/20 flex gap-4">
              <Truck className="text-[#d32f2f] shrink-0" size={24} />
              <p className="text-xs text-gray-600 leading-relaxed">
                <span className="font-bold text-[#2a1d19]">Packaging Note:</span> Every order is packed in high-quality, leak-proof jars to maintain freshness and taste during transit.
              </p>
            </div>
          </div>

          {/* --- RIGHT: PAYMENT & SUMMARY --- */}
          <div className="space-y-8 h-fit lg:sticky lg:top-28">
            
            {/* Payment Card */}
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-2 border-l-[8px] border-[#ffc107]/20 border-l-[#ffc107] flex flex-col items-center text-center">
              <div className="bg-red-50 text-[#d32f2f] p-4 rounded-full mb-6">
                <CreditCard size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2a1d19] mb-2">Scan to Pay ₹{totalAmount}</h3>
              
              {/* QR Code */}
              <div className="bg-white p-4 rounded-3xl border-2 border-dashed border-[#ffc107] my-6 transition-transform hover:scale-105 duration-300">
                <img src={qrCodeUrl} alt="UPI QR Code" className="w-48 h-48 mx-auto" />
              </div>

              <div className="w-full space-y-4">
                <div className="flex flex-col gap-1 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Receiver UPI ID</span>
                  <span className="font-black text-[#d32f2f] text-lg">{myUpiId}</span>
                </div>

                <a 
                  href={upiLink}
                  className="w-full bg-[#2a1d19] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                >
                   <QrCode size={18} /> Pay Using UPI App
                </a>

                <button 
                  onClick={handlePaymentDone}
                  className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-5 rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg"
                >
                  <MessageSquare size={20} /> Payment Done - Submit Order
                </button>
              </div>

              <div className="mt-8 flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase">
                <ShieldCheck size={16} className="text-green-500" />
                100% Secure Manual Verification
              </div>
            </div>

            {/* Back to Shopping */}
            <button onClick={() => navigate("/products")} className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-[#d32f2f] font-bold text-xs uppercase tracking-widest transition-colors">
              <ArrowLeft size={16} /> Back to Products
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;