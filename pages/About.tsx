import React from 'react';
import { ShieldCheck, Users, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-slate-950 pb-20">
      <div className="relative py-32 bg-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="text-brand-400 font-bold uppercase tracking-widest text-xs mb-6 block">Sobre a Bambam</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-none">
            Paixão por <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Inovação.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Nascemos para redefinir o mercado de Apple na Bahia. Sem letras miúdas, apenas produtos originais e transparência radical.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-20 relative z-20 space-y-20">
        <section className="bg-slate-900/80 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl shadow-black/20 animate-fade-in-up animate-delay-100">
          <h2 className="text-3xl font-black text-white mb-8">Nossa Jornada</h2>
          <div className="prose prose-lg text-slate-400 leading-loose">
            <p>
              A BAMBAM IMPORTS surgiu de uma frustração comum: a falta de confiança no mercado de eletrônicos importados. Clientes de Feira de Santana e região precisavam escolher entre preços abusivos de grandes varejistas ou a insegurança do mercado informal.
            </p>
            <p className="mt-4">
              Decidimos criar uma terceira via. Um lugar onde a experiência de compra fosse premium, o produto garantido e o suporte técnico acessível. Hoje, somos referência em todo o estado, entregando não apenas caixas, mas a certeza de um bom negócio.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Segurança", icon: ShieldCheck, text: "Garantia real em cada dispositivo vendido, novo ou seminovo." },
             { title: "Comunidade", icon: Users, text: "Mais de 5.000 clientes satisfeitos em toda a Bahia." },
             { title: "Excelência", icon: Heart, text: "Atendimento humanizado antes, durante e após a compra." }
           ].map((item, idx) => (
             <div key={idx} className="bg-white/5 p-10 rounded-[2.5rem] text-center shadow-xl shadow-black/20 border border-white/5 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-500 border border-white/5 shadow-inner">
                 <item.icon className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-xl text-white mb-4">{item.title}</h3>
               <p className="text-slate-400 leading-relaxed">{item.text}</p>
             </div>
           ))}
        </section>
      </div>
    </div>
  );
};