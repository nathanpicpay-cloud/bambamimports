import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Headphones, Smartphone, Star, Zap } from 'lucide-react';
import { Button, ProductCarousel } from '../components/UI';
import { MOCK_PRODUCTS, REVIEWS } from '../constants';

export const Home: React.FC = () => {
  // Use all products for the carousel
  const featuredProducts = MOCK_PRODUCTS;

  return (
    <div className="flex flex-col gap-0 pb-20 overflow-hidden w-full">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-20 overflow-hidden">
        {/* Aurora Background - Gold/Dark Theme */}
        <div className="absolute inset-0 bg-slate-950 z-0">
          <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-brand-500/10 rounded-full blur-[80px] md:blur-[120px] animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-amber-900/10 rounded-full blur-[60px] md:blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[900px] h-[300px] md:h-[900px] bg-brand-900/5 rounded-full blur-[60px] md:blur-[100px] animate-blob animation-delay-4000"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-8 md:space-y-10 animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm mx-auto lg:mx-0">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span className="text-xs font-bold tracking-wide uppercase text-slate-300">O melhor da Apple na Bahia</span>
              </div>
              
              {/* Adjusted Typography for Mobile */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight md:leading-[0.95] tracking-tight">
                Tecnologia <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-100">Original.</span> <br/>
                Preço Real.
              </h1>
              
              <p className="text-base md:text-xl text-slate-400 max-w-lg leading-relaxed border-l-0 md:border-l-4 border-brand-500 pl-0 md:pl-6 mx-auto lg:mx-0">
                iPhones, iPads e assistência técnica com procedência garantida e entrega rápida em Feira de Santana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/loja" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full shadow-xl shadow-brand-500/20">
                    Ver Catálogo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="https://wa.me/5575999999999" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full hover:text-brand-400 hover:border-brand-500">
                     Falar no WhatsApp
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="pt-8 flex justify-center lg:justify-start gap-8 border-t border-white/10">
                 <div>
                   <p className="text-2xl md:text-3xl font-black text-white">+5k</p>
                   <p className="text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-wider">Clientes Felizes</p>
                 </div>
                 <div>
                   <p className="text-2xl md:text-3xl font-black text-white">4.9</p>
                   <p className="text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-wider">Avaliação Média</p>
                 </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up animate-delay-200 order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-amber-900/20 rounded-full blur-3xl transform -translate-y-12 scale-90"></div>
              <img 
                src="https://i.imgur.com/FPG7dVS.png" 
                alt="iPhone" 
                className="relative z-10 w-3/4 md:w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 animate-float rounded-3xl"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
              {/* Floating Cards Element - Hidden on mobile to save space, visible on tablet+ */}
              <div className="absolute -bottom-5 -left-5 md:-bottom-10 md:-left-10 bg-slate-900/80 backdrop-blur-xl p-3 md:p-4 rounded-2xl shadow-2xl border border-white/10 hidden sm:block animate-bounce" style={{ animationDuration: '3s' }}>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-500/10 rounded-full flex items-center justify-center text-brand-400 border border-brand-500/20">
                      <Truck className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase">Entrega Grátis</p>
                      <p className="text-xs md:text-sm font-bold text-white">Em Feira de Santana</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 -mt-5 md:-mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: ShieldCheck, title: "100% Original", desc: "Garantia Apple de verdade." },
            { icon: Zap, title: "Entrega Flash", desc: "Receba hoje em Feira." },
            { icon: Headphones, title: "Suporte Real", desc: "Humanizado e técnico." },
            { icon: Smartphone, title: "Buyback", desc: "Seu usado vale desconto." },
          ].map((feature, idx) => (
            <div key={idx} className="glass-dark p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-black/30 border-t border-white/10 hover:border-brand-500/30 flex items-center md:block gap-4 md:gap-0">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-0 md:mb-6 text-brand-400 border border-white/5 shadow-inner shrink-0">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Modern Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
           <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Explorar <br/>Categorias</h2>
           <Link to="/loja" className="text-brand-400 font-bold hover:text-brand-300 flex items-center gap-2 group text-sm md:text-base">
             Ver loja completa <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 h-auto md:h-[500px]">
          {[
            { name: "iPhone", img: "https://i.imgur.com/ay6sDRd.png", col: "col-span-2 md:col-span-2 row-span-2 md:row-span-1", bg: "from-slate-950/90" },
            { name: "Watch", img: "https://i.imgur.com/nInQCxb.png", col: "col-span-1 md:col-span-1 md:row-span-1", bg: "from-slate-950/80" },
            { name: "iPad", img: "https://i.imgur.com/f7rJDqy.png", col: "col-span-1 md:col-span-1 md:row-span-1", bg: "from-slate-950/80" },
          ].map((cat, idx) => (
            <Link 
              key={cat.name} 
              to={`/loja?category=${cat.name}`} 
              className={`relative rounded-[2rem] overflow-hidden group ${cat.col} border border-white/5 shadow-lg min-h-[150px] md:min-h-0`}
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.bg} to-transparent flex flex-col justify-end p-6 md:p-8 transition-opacity duration-300`}>
                <span className="text-white font-black text-xl md:text-2xl tracking-tight translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{cat.name}</span>
                <span className="text-brand-400 text-xs md:text-sm mt-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 font-bold">Ver produtos</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="bg-slate-900/50 py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-900/50 -z-10 rounded-none md:rounded-l-[4rem]"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10 md:mb-12 flex items-end justify-between">
            <div>
              <span className="text-brand-400 font-bold uppercase tracking-widest text-xs">Oportunidades</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Destaques da Semana</h2>
            </div>
            {/* Arrows instruction for mobile could go here */}
            <div className="hidden md:block">
              <span className="text-xs text-slate-500">Deslize para ver mais</span>
            </div>
          </div>
        </div>
        
        {/* CAROUSEL REPLACING GRID - Full Width Marquee */}
        <div className="w-full">
          <ProductCarousel products={featuredProducts} />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-12 md:mt-16 text-center">
            <Link to="/loja" className="block sm:inline-block">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 hover:border-brand-500 hover:text-brand-400">
                Ver todos os produtos
              </Button>
            </Link>
        </div>
      </section>

      {/* Tech Support Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl shadow-black/50">
          <div className="absolute inset-0 bg-slate-900 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/repairbg/1200/600')] bg-cover opacity-10 mix-blend-overlay grayscale"></div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 p-8 md:p-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-brand-300 text-[10px] md:text-xs font-bold uppercase tracking-wide mb-6">
                Assistência Especializada
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Seu Apple quebrou? <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Nós resolvemos.</span>
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 max-w-md leading-relaxed">
                Técnicos certificados, peças premium e garantia em todos os serviços. De tela quebrada a reparo de placa.
              </p>
              <Link to="/assistencia" className="block sm:inline-block">
                 <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-brand-500 text-slate-950 hover:bg-brand-400 hover:text-black border-none shadow-lg shadow-brand-500/20">Agendar Reparo</Button>
              </Link>
            </div>
            <div className="relative group order-1 md:order-2">
               <div className="absolute inset-0 bg-brand-500 rounded-2xl rotate-6 opacity-10 blur-xl group-hover:rotate-12 transition-transform duration-500"></div>
               <img src="https://imgur.com/7ZcLb3r" alt="Repair" className="relative w-full rounded-2xl shadow-2xl border border-white/10 transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 opacity-90 hover:opacity-100 grayscale group-hover:grayscale-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-3xl font-black text-white mb-8 md:mb-12 text-center">Clientes Felizes</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-slate-900/40 p-6 md:p-8 rounded-[2rem] border border-white/5 shadow-xl shadow-black/20 relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-serif leading-none text-brand-500 pointer-events-none group-hover:scale-110 transition-transform">"</div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-brand-500 fill-brand-500' : 'text-slate-700'}`} />
                ))}
              </div>
              <p className="text-slate-300 mb-8 italic text-base md:text-lg leading-relaxed relative z-10">{review.comment}</p>
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