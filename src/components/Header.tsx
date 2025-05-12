
import React, { useState } from 'react';
import { Gamepad, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full py-4 px-6 md:px-10 z-30 transition-all duration-300 ${isScrolled ? 'bg-gta-darker/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          <span className="relative">
            <Gamepad className="h-8 w-8 text-gta-accent group-hover:text-gta-highlight transition-colors" />
            <span className="absolute inset-0 animate-pulse-glow rounded-full opacity-75 group-hover:opacity-100"></span>
          </span>
          <span className="text-2xl font-bold text-white">
            <span className="text-gta-accent">GTA</span> 6 Shop
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#" className="text-white/90 hover:text-gta-accent transition-colors">Games</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gta-accent transition-colors">Accessories</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gta-accent transition-colors">Hardware</a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-gta-accent transition-colors">Merchandise</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-white/90 hover:text-gta-accent transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-white/90 hover:text-gta-accent transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
