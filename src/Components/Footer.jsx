const Footer = () => {
  return (
    <footer className="bg-[#131112] text-white py-4">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <h3 className="text-[#f2ae01] text-lg font-semibold mb-2">
            Follow Us
          </h3>
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="https://facebook.com/eventnexus"
                className="hover:text-[#f14b17]"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/eventnexus"
                className="hover:text-[#f14b17]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/eventnexus"
                className="hover:text-[#f14b17]"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="border-t border-[#f2ae01] mt-4 pt-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} EventNexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
