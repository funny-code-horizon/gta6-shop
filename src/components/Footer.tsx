
import React from 'react';
import { Gamepad } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gta-dark border-t border-gta-accent/20 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <Gamepad className="h-6 w-6 text-gta-accent" />
              <span className="text-xl font-bold text-white">
                <span className="text-gta-accent">GTA</span> 6 Shop
              </span>
            </a>
            <p className="text-white/70 text-sm">
              Your ultimate destination for gaming gear and accessories. Affiliate links point to Amazon.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Gaming Consoles</a></li>
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Controllers</a></li>
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Gaming Chairs</a></li>
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Accessories</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">Discord</a></li>
                <li><a href="#" className="text-white/70 hover:text-gta-accent transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gta-accent/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GTA 6 Shop. This is an affiliate site. Not affiliated with Rockstar Games.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/50 hover:text-gta-accent transition-colors text-sm">Affiliate Disclosure</a>
            <span className="text-white/50">|</span>
            <a href="#" className="text-white/50 hover:text-gta-accent transition-colors text-sm">Amazon Associates</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
