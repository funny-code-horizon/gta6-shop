import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Page Not Found | GTA 6 Shop";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex, nofollow';
    document.head.appendChild(metaTag);

    return () => {
      const existingMeta = document.querySelector('meta[name="robots"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gta-darker py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 text-gta-accent">404</h1>
          <h2 className="text-2xl font-semibold mb-4 text-white">Page Not Found</h2>
          <p className="text-white/70 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="btn-gta inline-block"
            aria-label="Return to homepage"
          >
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
