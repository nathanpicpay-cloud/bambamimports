import React, { useState } from 'react';
import { Calendar, Clock, PenTool, CheckCircle, Smartphone } from 'lucide-react';
import { SERVICES } from '../constants';
import { Button } from '../components/UI';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', device: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
     return (
       <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 animate-fade-in-up pt-20">
         <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-500/10">
           <CheckCircle className="w-12 h-12 text-green-500" />
         </div>
         <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Agendamento Recebido!</h2>
         <p className="text-slate-400 text-lg max-w-md mb-10 leading-relaxed">
           Nossa equipe técnica entrará em contato via WhatsApp em breve para confirmar os detalhes.
         </p>
         <Button onClick={() => setSubmitted(false)} size="lg">Voltar ao Início</Button>
       </div>
     )
  }

  return (
    <div className="min-h-screen py-24 md:py-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
          <span className="text-brand-400 font-bold uppercase tracking-widest text-xs mb-4 block">Assistência Técnica</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Seu Apple Novo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">De Novo.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Laboratório próprio com maquinário de ponta e peças originais. Transparência total no diagnóstico.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start">
          {/* Service List */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-fade-in-up animate-delay-100">
            <h3 className="text-2xl font-bold text-white text-center md:text-left">Escolha o Reparo</h3>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {SERVICES.map((service) => (
                <div 
                  key={service.id} 
                  onClick={() => setSelectedService(service.name)}
                  className={`cursor-pointer group p-6 rounded-[2rem] border transition-all duration-300 relative overflow-hidden ${selectedService === service.name ? 'border-brand-500 bg-brand-900/20 shadow-xl shadow-brand-500/10' : 'border-white/5 bg-slate-900/60 backdrop-blur-md hover:border-brand-500/50 hover:shadow-lg'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${selectedService === service.name ? 'bg-brand-500 text-slate-950' : 'bg-white/10 text-white group-hover:bg-brand-500 group-hover:text-slate-950'}`}>
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">{service.name}</h4>
                  <p className="text-sm text-slate-400 mb-6 h-auto md:h-10 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 pt-4 border-t border-white/5">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {service.duration}</span>
                    <span className="text-brand-400 bg-brand-500/10 px-2 py-1 rounded-md">{service.priceEstimate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form - Glass Panel - Sticky on desktop, static on mobile */}
          <div className="lg:col-span-5 animate-fade-in-up animate-delay-200 static lg:sticky lg:top-32">
            <div className="bg-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl shadow-black/20">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-950">
                    <Calendar className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-bold text-white">Agendar Visita</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500 ml-1">Serviço Selecionado</label>
                  <input 
                    type="text" 
                    value={selectedService || ''} 
                    readOnly 
                    placeholder="Selecione um serviço ao lado"
                    className="w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-800 text-white font-bold focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:font-normal placeholder:text-slate-500"
                    required
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500 ml-1">Seu Nome</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-950/50 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                    placeholder="Nome completo"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500 ml-1">WhatsApp</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-950/50 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                      placeholder="(XX) 9..."
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500 ml-1">Modelo</label>
                    <input 
                      type="text" 
                      value={formData.device}
                      onChange={e => setFormData({...formData, device: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-950/50 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                      placeholder="Ex: iPhone 13"
                      required
                    />
                  </div>
                </div>

                <Button fullWidth type="submit" size="lg" disabled={!selectedService} className="mt-4 shadow-brand-500/25">
                  Confirmar Agendamento
                </Button>
                <p className="text-[10px] text-center text-slate-500 leading-tight px-4">
                  Ao agendar, você concorda com nossa política de privacidade. O orçamento final é realizado presencialmente.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};