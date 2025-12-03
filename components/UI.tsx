import React, { useRef } from 'react';
import { ShoppingBag, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, variant = 'primary', size = 'md', fullWidth, className = '', ...props 
}) => {
  const baseStyle = "relative overflow-hidden inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed z-10";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5 border border-white/10",
    secondary: "bg-white text-slate-950 shadow-lg shadow-white/10 hover:bg-slate-200 hover:-translate-y-0.5 border border-transparent",
    outline: "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:border-brand-500 hover:text-brand-400 hover:bg-white/10",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {/* Shine Effect Overlay for Primary */}
      {(variant === 'primary') && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
      )}
      <span className="relative z-10 flex items-center justify-center w-full">{children}</span>
    </button>
  );
};

// --- Badge ---
export const Badge: React.FC<{ children: React.ReactNode, type?: 'success' | 'warning' | 'neutral' | 'brand' }> = ({ children, type = 'neutral' }) => {
  const styles = {
    success: "bg-green-500/10 text-green-400 border-green-500/20",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    neutral: "bg-slate-800/50 text-slate-300 border-slate-700",
    brand: "bg-brand-500/10 text-brand-400 border-brand-500/20"
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border backdrop-blur-sm ${styles[type]}`}>
      {children}
    </span>
  );
};

// --- Product Card ---
export const ProductCard: React.FC<{ product: Product, className?: string }> = ({ product, className = "" }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/produto/${product.id}`} className={`group relative flex flex-col h-full animate-fade-in-up ${className}`}>
      {/* Card Container */}
      <div className="flex-1 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/5 hover:border-brand-500/30 hover:-translate-y-2 relative overflow-hidden">
        
        {/* Glow Effect on Hover */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          {product.condition === 'Novo' && <Badge type="brand">Novo</Badge>}
          {product.condition === 'Seminovo' && <Badge type="success">Premium</Badge>}
        </div>

        {/* Discount Tag */}
        {product.originalPrice && (
          <div className="absolute top-4 right-4 z-20">
             <span className="bg-brand-500 text-slate-950 text-[10px] font-bold px-2 py-1 rounded-full shadow-lg shadow-brand-500/20">
               -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
             </span>
          </div>
        )}

        {/* Image Area */}
        <div className="aspect-[4/5] relative mb-6 flex items-center justify-center">
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent rounded-2xl opacity-20"></div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl grayscale-[30%] group-hover:grayscale-0" 
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
             <div>
                <span className="text-xs font-semibold text-brand-500 uppercase tracking-widest">{product.category}</span>
                <h3 className="font-bold text-slate-100 text-lg leading-tight group-hover:text-brand-400 transition-colors mt-1">
                  {product.name}
                </h3>
             </div>
          </div>
          
          <div className="flex items-center gap-1 mb-4">
            <Star className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
            <span className="text-xs font-medium text-slate-400">{product.rating}</span>
          </div>

          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-slate-500 line-through font-medium h-4">
                {product.originalPrice && new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.originalPrice)}
              </span>
              <span className="text-xl font-black text-white">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
              </span>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-brand-500/30 border border-white/5"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

// --- Product Carousel ---
export const ProductCarousel: React.FC<{ products: Product[] }> = ({ products }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 320; // Aproximadamente a largura de um card + gap
      const newScrollLeft = direction === 'left' 
        ? containerRef.current.scrollLeft - scrollAmount 
        : containerRef.current.scrollLeft + scrollAmount;
      
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      {/* Scroll Buttons - Hidden on Mobile */}
      <button 
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-12 h-12 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full items-center justify-center text-white hover:bg-brand-500 hover:text-black transition-all shadow-xl disabled:opacity-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-12 h-12 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full items-center justify-center text-white hover:bg-brand-500 hover:text-black transition-all shadow-xl"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[280px] md:min-w-[320px] snap-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};