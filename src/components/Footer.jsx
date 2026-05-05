function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">UshaPickles</h2>
          <p className="text-gray-400">Bringing the traditional taste of homemade pickles to every household in India.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">All Products</a></li>
            <li><a href="#" className="hover:text-orange-500">Refund Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: gunjiushasri999@gmail.com</p>
          <p className="text-gray-400">Location: Hyderabad, Telangana</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 UshaPickles. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;