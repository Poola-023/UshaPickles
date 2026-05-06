import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UshaImg from '../img/Usha.jpeg';
import NatashaImg from '../img/Natasha.webp';
import PardhuImg from '../img/ProfilePic.jpeg';
import NavyaImg from '../img/Navya.webp';

function AboutUs() {
  return (
    <div className="bg-[#fdfbf7] min-h-screen flex flex-col">
      <Navbar />

      {/* --- PREMIUM PAGE BANNER --- */}
      <div className="bg-gradient-to-r from-[#4a0e0e] to-[#d32f2f] py-20 text-center shadow-2xl relative overflow-hidden">
        <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
          About Usha Pickles
        </h1>
        <div className="flex justify-center items-center gap-2 text-[#ffc107] font-bold text-sm uppercase tracking-[0.2em]">
          <span>Home</span>
          <span className="text-white/50">/</span>
          <span>About Us</span>
        </div>
      </div>

      {/* --- OUR STORY SECTION --- */}
      <div className="flex-grow py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Visual Side with Decorative Frame */}
          <div className="relative group">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
              <img
                src={UshaImg}
                alt="Traditional pickle preparation"
                className="w-full h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative accent background */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#ffc107] rounded-3xl -z-0 hidden md:block opacity-20"></div>
          </div>

          {/* Narrative Side */}
          <div className="flex flex-col items-start">
            <span className="text-[#d32f2f] font-bold tracking-[0.25em] uppercase text-sm block mb-4">
              Our Heritage
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2a1d19] mb-8 leading-tight">
              Preserving Traditions, <br/>
              <span className="text-[#d32f2f]">One Jar at a Time</span>
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                At <strong className="text-[#2a1d19]">Usha Pickles</strong>, we believe that the best flavors are those shared across generations. What started in a small home kitchen in Hyderabad has grown into a mission to bring authentic, handmade pickles to your table.[cite: 1]
              </p>
              <p>
                Every batch is crafted using the same time-tested methods our grandmothers used—hand-picking the freshest seasonal produce, sun-drying spices, and aging them to perfection in premium oils.[cite: 1]
              </p>
              <div className="italic font-medium text-gray-800 border-l-4 border-[#ffc107] pl-6 bg-yellow-50 p-6 rounded-r-2xl shadow-sm">
                "No artificial preservatives, no shortcuts. Just pure, soulful tradition."[cite: 1]
              </div>
            </div>

            {/* Quality Badges / Stats */}
            <div className="mt-12 flex flex-wrap gap-10 border-t border-gray-200 pt-10 w-full">
              <div className="flex flex-col">
                <p className="text-4xl font-black text-[#d32f2f]">100%</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Natural Ingredients[cite: 1]</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <p className="text-4xl font-black text-[#d32f2f]">50+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Years of Tradition[cite: 1]</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* --- TESTIMONIALS SECTION --- */}
<section className="bg-[#fdfbf7] py-20 border-t border-gray-100">
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2a1d19] mb-4">
        What Our <span className="text-[#d32f2f] border-b-4 border-[#ffc107] pb-1">Customers Say</span>
      </h2>
      <p className="text-gray-500 text-lg mt-6">Real stories from our pickle-loving community.</p>
    </div>

    {/* Testimonial Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Testimonial 1 */}
      <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
        <span className="text-6xl text-[#ffc107]/30 font-serif leading-none h-10">“</span>
        <div className="flex gap-1 text-[#ffc107] mb-6">
          {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
        </div>
        <h3 className="text-xl font-bold text-[#2a1d19] mb-4">“Absolutely delicious!”</h3>
        <p className="text-gray-500 italic leading-relaxed mb-8">
          "These pickles remind me of homemade flavors from my childhood. Fresh, perfectly spiced, and full of authentic Andhra taste. Highly recommended!"
        </p>
        <div className="mt-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffc107] mb-3">
            <img src={NatashaImg} alt="Sri Hari" className="w-full h-full object-cover" />
          </div>
          <p className="font-bold text-[#d32f2f] uppercase tracking-wider text-sm">Natasha</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
        <span className="text-6xl text-[#ffc107]/30 font-serif leading-none h-10">“</span>
        <div className="flex gap-1 text-[#ffc107] mb-6">
          {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
        </div>
        <h3 className="text-xl font-bold text-[#2a1d19] mb-4">“Perfect balance of taste”</h3>
        <p className="text-gray-500 italic leading-relaxed mb-8">
          "I've tried many brands, but these pickles truly stand out. Rich flavor, not too oily, and very fresh. Goes perfectly with every meal!"
        </p>
        <div className="mt-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffc107] mb-3">
            <img src={PardhuImg} alt="Geetha" className="w-full h-full object-cover" />
          </div>
          <p className="font-bold text-[#d32f2f] uppercase tracking-wider text-sm">Pardhu</p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
        <span className="text-6xl text-[#ffc107]/30 font-serif leading-none h-10">“</span>
        <div className="flex gap-1 text-[#ffc107] mb-6">
          {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
        </div>
        <h3 className="text-xl font-bold text-[#2a1d19] mb-4">“Feels like home in every bite”</h3>
        <p className="text-gray-500 italic leading-relaxed mb-8">
          "The quality is amazing and you can really taste the natural ingredients. It feels like homemade pickles prepared with love."
        </p>
        <div className="mt-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffc107] mb-3">
            <img src={NavyaImg} alt="Phani" className="w-full h-full object-cover" />
          </div>
          <p className="font-bold text-[#d32f2f] uppercase tracking-wider text-sm">Navya</p>
        </div>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default AboutUs;
