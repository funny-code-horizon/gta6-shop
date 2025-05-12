
import React, { useEffect, useState, useRef, useCallback } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../data/products';

const ProductGrid = () => {
  const [products, setProducts] = useState(productsData.slice(0, 12));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useRef<HTMLDivElement | null>(null);

  // This function will be called when the last element becomes visible
  const loadMoreProducts = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const currentLength = products.length;
      const nextProducts = productsData.slice(currentLength, currentLength + 8);
      
      if (nextProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prev => [...prev, ...nextProducts]);
      }
      
      setLoading(false);
    }, 1500);
  }, [loading, hasMore, products.length]);

  // Set up intersection observer
  useEffect(() => {
    if (loading) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreProducts();
      }
    });
    
    if (lastProductRef.current) {
      observer.current.observe(lastProductRef.current);
    }
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, hasMore, loadMoreProducts]);

  return (
    <section className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Featured Products</h2>
      <p className="text-white/70 mb-8">Curated gaming gear for the ultimate experience</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => {
          if (index === products.length - 1) {
            return (
              <div key={product.id} ref={lastProductRef}>
                <ProductCard {...product} />
              </div>
            );
          } else {
            return <ProductCard key={product.id} {...product} />;
          }
        })}
      </div>
      
      {loading && (
        <div className="flex justify-center items-center mt-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gta-accent"></div>
        </div>
      )}
      
      {!hasMore && products.length > 0 && (
        <div className="text-center mt-10">
          <p className="text-white/70">You've reached the end of the products</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
