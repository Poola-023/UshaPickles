import { User, Phone, MapPin, Mail, Globe, Calendar, Info, Send, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="bg-[#fdfbf7] min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* --- PREMIUM PAGE BANNER --- */}
      <div className="bg-gradient-to-r from-[#4a0e0e] to-[#d32f2f] py-20 text-center shadow-2xl relative overflow-hidden">
        <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
          Contact Us
        </h1>
        <div className="flex justify-center items-center gap-2 text-[#ffc107] font-bold text-sm uppercase tracking-[0.2em]">
          <span>Home</span>
          <span className="text-white/50">/</span>
          <span>Contact</span>
        </div>
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <div className="flex-grow py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: CONTACT FORM CARD */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h2 className="text-4xl font-serif font-bold text-[#d32f2f] mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Have a bulk order, a question about our secret recipe, or need support with your tracking? Drop us a line below.
            </p>

            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2a1d19]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Ravi Kumar"
                  className="w-full px-6 py-4 bg-white rounded-xl border border-gray-200 focus:border-[#d32f2f] focus:outline-none transition-all shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2a1d19]">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="+91 94943 45715"
                  className="w-full px-6 py-4 bg-white rounded-xl border border-gray-200 focus:border-[#d32f2f] focus:outline-none transition-all shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2a1d19]">Message</label>
                <textarea 
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-white rounded-xl border border-gray-200 focus:border-[#d32f2f] focus:outline-none transition-all shadow-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-5 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: INFO CARDS */}
          <div className="space-y-8">
            
            {/* BULK & GLOBAL ORDERS CARD */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border-2 border-l-[6px] border-[#ffc107]/30 border-l-[#ffc107]">
              <h3 className="text-xl font-serif font-bold text-[#d32f2f] mb-8">Bulk & Global Orders</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="text-[#ffc107] pt-1"><Calendar size={24} /></div>
                  <div>
                    <p className="font-bold text-[#2a1d19]">Event Orders:</p>
                    <p className="text-gray-500 text-sm leading-relaxed">We take bulk orders for marriages, festivals, and all special occasions with custom packaging.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="text-[#ffc107] pt-1"><Globe size={24} /></div>
                  <div>
                    <p className="font-bold text-[#2a1d19]">Worldwide Shipping:</p>
                    <p className="text-gray-500 text-sm leading-relaxed">Now shipping globally! We help you send the authentic taste of Andhra to your loved ones in other countries.</p>
                  </div>
                </div>

                <button className="w-full border-2 border-[#ffc107] text-[#2a1d19] py-3 rounded-full font-bold uppercase text-xs flex items-center justify-center gap-2 hover:bg-[#ffc107] transition-colors mt-4">
                  <Info size={16} /> INQUIRE FOR BULK ORDERS
                </button>
              </div>
            </div>

            {/* DIRECT SUPPORT CARD */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border-2 border-l-[6px] border-[#ffc107]/30 border-l-[#ffc107]">
              <h3 className="text-xl font-serif font-bold text-[#d32f2f] mb-8">Direct Support</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
                  <div className="text-[#ffc107]"><User size={20} /></div>
                  <span>Poola Parthasarathi</span>
                </div>
                
                <div className="flex items-start gap-4 text-sm font-medium text-gray-600">
                  <div className="text-[#ffc107] pt-1"><MapPin size={20} /></div>
                  <span className="leading-relaxed">Hyderabad, Telangana, India</span>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
                  <div className="text-[#ffc107]"><Mail size={20} /></div>
                  <span>poolaparthasarathi@gmail.com</span>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
                  <div className="text-[#ffc107]"><Phone size={20} /></div>
                  <span>+91 9133424340</span>
                </div>

                <button className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-4 rounded-3xl font-bold flex items-center justify-center gap-3 transition-all mt-4">
                  <MessageCircle size={20} /> CHAT ON WHATSAPP
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
