import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Phone, MapPin, Instagram, Facebook, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './UI';

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, toggleCart, isCartOpen, items, removeFromCart, cartTotal } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans selection:bg-brand-500 selection:text-black">
      
      {/* Floating Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <nav className={`w-full max-w-7xl transition-all duration-500 rounded-2xl ${isScrolled ? 'glass-dark shadow-xl shadow-black/40 bg-slate-950/90' : 'bg-transparent'}`}>
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              
              {/* Logo */}
              <Link to="/" className="group flex items-center gap-2">
                 <div className="relative h-12 w-auto transition-transform duration-300 group-hover:scale-105">
                   <img 
                     src="https://i.imgur.com/ZEaBTkA.png" 
                     alt="BAMBAM Imports" 
                     className="h-full w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                   />
                 </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1 p-1.5 bg-slate-900/50 rounded-full border border-white/5 backdrop-blur-sm shadow-inner shadow-black/20">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Loja', path: '/loja' },
                  { name: 'Assistência', path: '/assistencia' },
                  { name: 'Sobre', path: '/sobre' }
                ].map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === item.path ? 'bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/20 font-bold' : 'text-slate-400 hover:text-brand-400 hover:bg-white/5'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 md:gap-4">
                <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-slate-400 hover:bg-white/10 hover:text-brand-400 transition-all">
                  <Search className="w-5 h-5" />
                </button>
                <button 
                  onClick={toggleCart} 
                  className="relative flex items-center justify-center w-10 h-10 rounded-full text-white bg-white/5 border border-white/10 shadow-sm hover:bg-white/10 hover:border-brand-500/50 hover:shadow-brand-500/20 transition-all group"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-brand-400" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-slate-950 bg-brand-500 rounded-full border-2 border-slate-950">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                  className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white shadow-lg shadow-white/5"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 bg-slate-950/95 border-t border-white/5' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-6 pt-2 space-y-2">
               {[
                  { name: 'Home', path: '/' },
                  { name: 'Loja', path: '/loja' },
                  { name: 'Assistência', path: '/assistencia' },
                  { name: 'Sobre', path: '/sobre' },
                  { name: 'Contato', path: '/contato' }
                ].map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-300 font-medium hover:text-brand-400 transition-colors"
                  >
                    {item.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Modern Cart Drawer - Dark Mode */}
      <div className={`fixed inset-0 z-[60] ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={toggleCart} 
        />
        <div className={`absolute inset-y-0 right-0 w-full sm:w-[450px] bg-slate-950/95 backdrop-blur-xl shadow-2xl border-l border-white/10 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5">
              <div>
                <h2 className="text-2xl font-bold text-white">Seu Carrinho</h2>
                <p className="text-sm text-slate-400">{cartCount} itens selecionados</p>
              </div>
              <button onClick={toggleCart} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <X className="w-5 h-5 text-slate-300" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingBag className="w-16 h-16 mb-4 text-brand-500/30" />
                  <p className="font-medium text-lg text-slate-400">Seu carrinho está vazio.</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="group flex gap-5 items-center">
                    <div className="w-24 h-24 bg-white/5 rounded-2xl border border-white/5 p-2 flex-shrink-0 relative overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-normal" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-white truncate group-hover:text-brand-400 transition-colors">{item.name}</h3>
                      <p className="text-xs font-medium text-slate-500 mb-2">{item.condition}</p>
                      <div className="flex justify-between items-end">
                        <span className="text-lg font-bold text-brand-400">
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                        </span>
                        <div className="flex items-center gap-3 bg-white/5 rounded-lg p-1 border border-white/5">
                          <span className="text-xs font-bold w-6 text-center text-white">{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-slate-500 hover:text-red-400 transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 md:p-8 bg-slate-900 border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-10">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-sm font-medium text-slate-400">Total estimado</span>
                  <div className="text-right">
                    <span className="block text-3xl font-black text-white tracking-tight">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal)}
                    </span>
                    <span className="text-xs text-brand-400 font-bold uppercase tracking-wide">5% OFF no PIX</span>
                  </div>
                </div>
                <Link to="/checkout" onClick={toggleCart}>
                   <Button fullWidth size="lg" className="shadow-brand-500/20">Finalizar Compra</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer - Dark */}
      <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
        {/* Decorative Blob in Footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4 space-y-6">
               <div className="flex items-center gap-2">
                 <img src="https://i.imgur.com/ZEaBTkA.png" alt="BAMBAM" className="h-8 w-auto opacity-90" />
               </div>
              <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
                Sua referência em produtos Apple e assistência técnica na Bahia. Tecnologia de ponta, garantia real e o suporte que você merece.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-slate-950 hover:border-brand-500 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-white mb-6">Loja</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {['iPhones', 'MacBooks', 'Apple Watch', 'Acessórios'].map(item => (
                  <li key={item}><Link to="/loja" className="hover:text-brand-400 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold text-white mb-6">Ajuda</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {['Rastrear Pedido', 'Trocas e Devoluções', 'Termos de Uso', 'Política de Privacidade'].map(item => (
                  <li key={item}><Link to="/politicas" className="hover:text-brand-400 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold text-white mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                  <div>
                    <span className="block font-bold text-slate-200">(75) 99999-9999</span>
                    <span className="text-xs text-slate-500">Seg a Sex: 09h às 18h</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-400 shrink-0" />
                  <span>Feira de Santana, BA<br/>Enviamos para todo o estado.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
            <p>© 2024 BAMBAM IMPORTS. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              <span>Todos os sistemas operacionais</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp CTA */}
      <a href="https://wa.me/5575999999999" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 group">
         <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
         <div className="relative bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/20 transition-transform group-hover:scale-110 group-hover:-translate-y-1 flex items-center justify-center border-4 border-slate-900 backdrop-blur-md">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
         </div>
      </a>
    </div>
  );
};