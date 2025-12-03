import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Headphones, Smartphone, Star, Zap } from 'lucide-react';
import { Button, ProductCard } from '../components/UI';
import { MOCK_PRODUCTS, REVIEWS } from '../constants';

export const Home: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col gap-0 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Aurora Background - Gold/Dark Theme */}
        <div className="absolute inset-0 bg-slate-950 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-900/5 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span className="text-xs font-bold tracking-wide uppercase text-slate-300">O melhor da Apple na Bahia</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                Tecnologia <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-100">Original.</span> <br/>
                Preço Real.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed border-l-4 border-brand-500 pl-6">
                iPhones, iPads e assistência técnica com procedência garantida e entrega rápida em Feira de Santana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/loja">
                  <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-brand-500/20">
                    Ver Catálogo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="https://wa.me/5575999999999" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto hover:text-brand-400 hover:border-brand-500">
                     Falar no WhatsApp
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="pt-8 flex gap-8 border-t border-white/10">
                 <div>
                   <p className="text-3xl font-black text-white">+5k</p>
                   <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Clientes Felizes</p>
                 </div>
                 <div>
                   <p className="text-3xl font-black text-white">4.9</p>
                   <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Avaliação Média</p>
                 </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up animate-delay-200">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-amber-900/20 rounded-full blur-3xl transform -translate-y-12 scale-90"></div>
              <img 
                src="https://picsum.photos/seed/iphonehero/800/800" 
                alt="iPhone 15 Pro Max" 
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 animate-float"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
              {/* Floating Cards Element */}
              <div className="absolute -bottom-10 -left-10 bg-slate-900/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/10 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-500/10 rounded-full flex items-center justify-center text-brand-400 border border-brand-500/20">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Entrega Grátis</p>
                      <p className="text-sm font-bold text-white">Em Feira de Santana</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "100% Original", desc: "Garantia Apple de verdade." },
            { icon: Zap, title: "Entrega Flash", desc: "Receba hoje em Feira." },
            { icon: Headphones, title: "Suporte Real", desc: "Humanizado e técnico." },
            { icon: Smartphone, title: "Buyback", desc: "Seu usado vale desconto." },
          ].map((feature, idx) => (
            <div key={idx} className="glass-dark p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-black/30 border-t border-white/10 hover:border-brand-500/30">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-brand-400 border border-white/5 shadow-inner">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Modern Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex justify-between items-end mb-12">
           <h2 className="text-4xl font-black text-white tracking-tight">Explorar <br/>Categorias</h2>
           <Link to="/loja" className="text-brand-400 font-bold hover:text-brand-300 flex items-center gap-2 group">
             Ver loja completa <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[500px]">
          {[
            { name: "iPhone", img: "https://picsum.photos/seed/catiphone/400/600", col: "md:col-span-2", bg: "from-slate-950/90" },
            { name: "MacBook", img: "https://picsum.photos/seed/catmac/400/400", col: "md:col-span-1", bg: "from-slate-950/80" },
            { name: "Watch", img: "https://picsum.photos/seed/catwatch/400/400", col: "md:col-span-1 md:row-span-1", bg: "from-slate-950/80" },
            { name: "iPad", img: "https://picsum.photos/seed/catipad/400/400", col: "md:col-span-1 md:row-span-1", bg: "from-slate-950/80" },
          ].map((cat, idx) => (
            <Link 
              key={cat.name} 
              to={`/loja?category=${cat.name}`} 
              className={`relative rounded-[2rem] overflow-hidden group ${cat.col} ${idx === 3 ? 'hidden md:block' : ''} border border-white/5 shadow-lg`}
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.bg} to-transparent flex flex-col justify-end p-8 transition-opacity duration-300`}>
                <span className="text-white font-black text-2xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{cat.name}</span>
                <span className="text-brand-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0 font-bold">Ver produtos</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-900/50 py-24 relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 -z-10 rounded-l-[4rem]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-brand-400 font-bold uppercase tracking-widest text-xs">Oportunidades</span>
            <h2 className="text-4xl font-black text-white mt-2">Destaques da Semana</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/loja">
              <Button variant="outline" size="lg" className="rounded-full px-10 hover:border-brand-500 hover:text-brand-400">
                Ver todos os produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Support Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl shadow-black/50">
          <div className="absolute inset-0 bg-slate-900 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/repairbg/1200/600')] bg-cover opacity-10 mix-blend-overlay grayscale"></div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 p-10 md:p-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-brand-300 text-xs font-bold uppercase tracking-wide mb-6">
                Assistência Especializada
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Seu Apple quebrou? <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Nós resolvemos.</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
                Técnicos certificados, peças premium e garantia em todos os serviços. De tela quebrada a reparo de placa.
              </p>
              <Link to="/assistencia">
                 <Button variant="secondary" size="lg" className="bg-brand-500 text-slate-950 hover:bg-brand-400 hover:text-black border-none shadow-lg shadow-brand-500/20">Agendar Reparo</Button>
              </Link>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-brand-500 rounded-2xl rotate-6 opacity-10 blur-xl group-hover:rotate-12 transition-transform duration-500"></div>
               <img src="https://picsum.photos/seed/repair/500/500" alt="Repair" className="relative w-full rounded-2xl shadow-2xl border border-white/10 transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 opacity-90 hover:opacity-100 grayscale group-hover:grayscale-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-black text-white mb-12 text-center">Clientes Felizes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-slate-900/40 p-8 rounded-[2rem] border border-white/5 shadow-xl shadow-black/20 relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-serif leading-none text-brand-500 pointer-events-none group-hover:scale-110 transition-transform">"</div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-brand-500 fill-brand-500' : 'text-slate-700'}`} />
                ))}
              </div>
              <p className="text-slate-300 mb-8 italic text-lg leading-relaxed relative z-10">{review.comment}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-brand-500 border border-white/5">
                  {review.user.charAt(0)}
                </div>
                <div>
                  <span className="block font-bold text-white">{review.user}</span>
                  <span className="text-xs text-slate-500 font-medium">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};