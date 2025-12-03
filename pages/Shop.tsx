import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ArrowDownAZ, Check } from 'lucide-react';
import { ProductCard, Button } from '../components/UI';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const currentCategory = searchParams.get('category') || 'Todos';
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'popular'>('popular');

  const filteredProducts = useMemo(() => {
    let products = [...MOCK_PRODUCTS];

    if (currentCategory !== 'Todos') {
      products = products.filter(p => p.category === currentCategory);
    }

    if (sortBy === 'price-asc') products.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') products.sort((a, b) => b.price - a.price);

    return products;
  }, [currentCategory, sortBy]);

  const handleCategoryChange = (cat: string) => {
    setSearchParams({ category: cat });
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen py-12 relative">
      {/* Background Decor */}
      <div className="fixed top-20 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-black text-white tracking-tight">Catálogo</h1>
            <p className="text-slate-400 mt-2 font-medium">{filteredProducts.length} produtos premium disponíveis</p>
          </div>

          <div className="flex items-center gap-3 animate-fade-in-up animate-delay-100">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden p-3 bg-slate-900 rounded-xl shadow-sm border border-slate-800 text-slate-300"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>

            {/* Sort Dropdown */}
            <div className="relative group">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-slate-900/80 backdrop-blur-md pl-5 pr-12 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm font-bold text-slate-200 cursor-pointer shadow-sm hover:bg-slate-800 transition-colors"
              >
                <option value="popular">Relevância</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
              <ArrowDownAZ className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Filters - Sticky & Glass */}
          <aside className={`md:w-72 flex-shrink-0 z-30 ${isFilterOpen ? 'fixed inset-0 bg-slate-950 p-6 md:relative md:bg-transparent md:p-0' : 'hidden md:block'}`}>
            <div className="md:sticky md:top-28 space-y-8 animate-fade-in-up animate-delay-200">
              
              <div className="flex md:hidden justify-between items-center mb-6">
                 <h2 className="text-xl font-bold text-white">Filtros</h2>
                 <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-slate-800 rounded-full text-white">✕</button>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5 shadow-xl shadow-black/20">
                <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider text-brand-500">Categorias</h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => handleCategoryChange(cat)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex justify-between items-center group ${currentCategory === cat ? 'bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/20 font-bold' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                      >
                        {cat}
                        {currentCategory === cat && <Check className="w-4 h-4" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5 shadow-xl shadow-black/20">
                <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider text-brand-500">Condição</h3>
                <div className="space-y-3">
                  {['Novo', 'Seminovo Premium'].map((cond) => (
                     <label key={cond} className="flex items-center space-x-3 text-sm text-slate-400 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-700 bg-slate-800 transition-all checked:border-brand-500 checked:bg-brand-500" defaultChecked />
                        <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-950 opacity-0 peer-checked:opacity-100" />
                      </div>
                      <span className="font-medium group-hover:text-white">{cond}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 min-h-[500px]">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className={`animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                <p className="text-slate-400 text-lg mb-4">Nenhum produto encontrado nesta categoria.</p>
                <Button variant="outline" onClick={() => handleCategoryChange('Todos')}>
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};