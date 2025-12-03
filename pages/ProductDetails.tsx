import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, ShieldCheck, ShoppingBag, ArrowLeft, Share2 } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Button, Badge } from '../components/UI';
import { useCart } from '../context/CartContext';

export const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(product?.image);

  if (!product) {
    return <div className="text-center py-20 text-slate-400">Produto não encontrado. <Link to="/loja" className="text-brand-500 underline">Voltar</Link></div>;
  }

  return (
    <div className="min-h-screen py-10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link to="/loja" className="inline-flex items-center text-slate-500 hover:text-white transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para Loja
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Gallery Section - Glassmorphic Container */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="aspect-square bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/5 shadow-2xl shadow-black/20 p-10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <img 
                 src={activeImage || product.image} 
                 alt={product.name} 
                 className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105" 
               />
               {product.originalPrice && (
                 <div className="absolute top-6 left-6 bg-brand-500 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow-lg shadow-brand-500/20">
                   {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                 </div>
               )}
            </div>
            
            <div className="flex justify-center gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-2xl bg-white/5 border-2 overflow-hidden p-2 transition-all duration-300 ${activeImage === img ? 'border-brand-500 scale-110 shadow-lg shadow-brand-500/10' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="animate-fade-in-up animate-delay-200 pt-4">
            <div className="flex items-center justify-between mb-6">
               <div className="flex gap-2">
                 {product.condition === 'Novo' ? <Badge type="brand">Novo Lacrado</Badge> : <Badge type="success">Seminovo Premium</Badge>}
               </div>
               <button className="p-2 text-slate-400 hover:text-brand-400 transition-colors bg-white/5 rounded-full shadow-sm border border-white/5">
                 <Share2 className="w-5 h-5" />
               </button>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex text-brand-500">
                {[...Array(5)].map((_,i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-slate-400 text-sm font-medium underline decoration-slate-600 underline-offset-4">{product.reviewsCount} avaliações verificadas</span>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">{product.description}</p>

            {/* Price & Action Card */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-[2rem] p-8 border border-white/5 shadow-xl shadow-black/30 mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <p className="text-sm text-slate-400 font-medium mb-1">Preço à vista no PIX</p>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-5xl font-black text-brand-400 tracking-tight">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                  </span>
                </div>
                {product.originalPrice && (
                    <p className="text-slate-500 line-through font-medium mb-6">
                      De {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.originalPrice)}
                    </p>
                )}
                
                <div className="space-y-3">
                  <Button onClick={() => addToCart(product)} size="lg" fullWidth className="shadow-brand-500/25 h-14 text-lg">
                     <ShoppingBag className="w-5 h-5 mr-3" />
                     Adicionar ao Carrinho
                  </Button>
                  <a href={`https://wa.me/5575999999999?text=Tenho interesse no ${product.name}`} target="_blank" rel="noreferrer" className="block w-full">
                    <Button variant="outline" fullWidth className="h-14 bg-transparent border-slate-700 text-slate-300 hover:bg-white/5 hover:border-brand-500 hover:text-brand-400">Negociar no WhatsApp</Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Specs & Features */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <Truck className="w-6 h-6 text-brand-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Frete Grátis</h4>
                  <p className="text-xs text-slate-400 mt-1">Para Salvador e Região</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <ShieldCheck className="w-6 h-6 text-brand-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Garantia Total</h4>
                  <p className="text-xs text-slate-400 mt-1">12 Meses de cobertura</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-10">
              <h3 className="text-2xl font-bold text-white mb-6">Ficha Técnica</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                 {Object.entries(product.specs).map(([key, value]) => (
                   <div key={key} className="flex justify-between py-3 border-b border-white/5">
                     <span className="text-slate-400 capitalize font-medium">{key}</span>
                     <span className="font-bold text-slate-200">{value}</span>
                   </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};