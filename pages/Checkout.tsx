import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/UI';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Lock } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { items, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  if (items.length === 0 && step === 1) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white mb-6">Seu carrinho está vazio</h2>
        <Link to="/loja">
          <Button size="lg">Explorar Produtos</Button>
        </Link>
      </div>
    );
  }

  const handleFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      clearCart();
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6 animate-fade-in-up">
        <div className="relative mb-8">
           <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
           <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center relative shadow-xl shadow-green-500/20">
              <CheckCircle className="w-12 h-12 text-white" />
           </div>
        </div>
        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Pedido Confirmado!</h1>
        <p className="text-slate-400 mb-10 max-w-md text-lg leading-relaxed">
          Obrigado pela preferência. Enviamos os detalhes do pedido e o código de rastreio para seu WhatsApp e E-mail.
        </p>
        <Link to="/">
          <Button variant="outline" size="lg">Voltar para Início</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 md:py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
           <h1 className="text-3xl font-black text-white tracking-tight">Checkout Seguro</h1>
           <div className="flex items-center gap-2 text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
             <Lock className="w-3 h-3" /> Criptografado
           </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="md:col-span-2 space-y-8 animate-fade-in-up">
            
            {/* Steps Indicator */}
            <div className="flex gap-3 mb-8">
               <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-brand-500' : 'bg-slate-800'}`} />
               <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-brand-500' : 'bg-slate-800'}`} />
            </div>

            {/* Address Form (Simulation) */}
            <div className="bg-slate-900/50 p-8 rounded-[2rem] shadow-xl shadow-black/20 border border-white/5">
              <h3 className="font-bold text-lg mb-6 text-white">Dados de Entrega</h3>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Nome Completo" className="col-span-2 w-full px-5 py-3.5 bg-slate-950/50 rounded-xl border border-slate-700 text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-slate-600" />
                <input type="email" placeholder="Email" className="col-span-2 w-full px-5 py-3.5 bg-slate-950/50 rounded-xl border border-slate-700 text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-slate-600" />
                <input type="text" placeholder="CEP" className="w-full px-5 py-3.5 bg-slate-950/50 rounded-xl border border-slate-700 text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-slate-600" />
                <input type="text" placeholder="Cidade" className="w-full px-5 py-3.5 bg-slate-950/50 rounded-xl border border-slate-700 text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-slate-600" />
                <input type="text" placeholder="Endereço Completo" className="col-span-2 w-full px-5 py-3.5 bg-slate-950/50 rounded-xl border border-slate-700 text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-slate-600" />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-slate-900/50 p-8 rounded-[2rem] shadow-xl shadow-black/20 border border-white/5">
              <h3 className="font-bold text-lg mb-6 text-white">Pagamento</h3>
              <div className="space-y-4">
                <label className="flex items-center p-5 border-2 border-brand-500 bg-brand-900/10 rounded-2xl cursor-pointer relative overflow-hidden transition-all">
                  <input type="radio" name="payment" defaultChecked className="text-brand-600 focus:ring-brand-500 h-5 w-5 bg-slate-950 border-slate-700" />
                  <div className="ml-4">
                    <span className="block font-bold text-white">PIX (Recomendado)</span>
                    <span className="text-sm text-brand-400 font-medium">5% de desconto imediato</span>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center font-bold text-xs">%</div>
                </label>
                <label className="flex items-center p-5 border-2 border-transparent bg-slate-950/50 rounded-2xl cursor-pointer hover:bg-slate-900 transition-all border-slate-800">
                  <input type="radio" name="payment" className="text-slate-600 focus:ring-brand-500 h-5 w-5 bg-slate-950 border-slate-700" />
                  <div className="ml-4">
                    <span className="block font-bold text-slate-300">Cartão de Crédito</span>
                    <span className="text-sm text-slate-500">Em até 12x sem juros</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1 animate-fade-in-up animate-delay-200">
            <div className="bg-slate-900/50 p-8 rounded-[2rem] shadow-xl shadow-black/20 border border-white/5 sticky top-32">
              <h3 className="font-bold text-lg mb-6 text-white">Resumo do Pedido</h3>
              <div className="space-y-4 mb-8">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 p-1 flex-shrink-0">
                       <img src={item.image} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.quantity}x</p>
                    </div>
                    <span className="text-sm font-bold text-slate-300">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/5 pt-6 space-y-3">
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Subtotal</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal)}</span>
                </div>
                 <div className="flex justify-between text-sm text-green-400 font-medium">
                  <span>Desconto PIX</span>
                  <span>- {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal * 0.05)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Frete</span>
                  <span className="text-brand-400 font-bold uppercase text-xs tracking-wider">Grátis</span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="font-bold text-white">Total</span>
                  <span className="text-2xl font-black text-brand-400 tracking-tight">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal * 0.95)}</span>
                </div>
              </div>

              <Button onClick={handleFinish} fullWidth size="lg" className="mt-8 shadow-brand-500/20" disabled={loading}>
                {loading ? 'Processando...' : 'Pagar Agora'}
              </Button>
              
              <div className="flex items-center gap-2 mt-6 text-[10px] text-slate-500 justify-center">
                <AlertCircle className="w-3 h-3" /> Transação 256-bit SSL Segura
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};