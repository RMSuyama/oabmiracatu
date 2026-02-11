import React from 'react';

const LeisureSection = () => {
    return (
        <section id="leisure" className="py-24 lg:py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 lg:mb-20">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-[0.7rem] uppercase tracking-widest rounded mb-6">
                        Exclusivo para Inscritos
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6 font-serif">Lazer e Bem-estar</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">Espaços projetados para o descanso e a confraternização da advocacia do Vale do Ribeira.</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row transition-all duration-500 hover:shadow-primary/10">
                        <div className="lg:w-2/5 h-[300px] lg:h-auto relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                            <div className="absolute top-6 left-6">
                                <span className="bg-primary text-white px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Registro / SP
                                </span>
                            </div>
                        </div>

                        <div className="lg:w-3/5 p-8 lg:p-12">
                            <div className="mb-10">
                                <h3 className="text-3xl font-bold text-navy mb-3 font-serif">Área de Lazer da Advocacia</h3>
                                <p className="text-primary font-bold text-sm tracking-wide flex items-center gap-2 italic">
                                    📍 Estrada Municipal, Registro - SP
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-navy mb-2 uppercase text-[0.7rem] tracking-widest">Piscina Recreativa</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">Ambiente relaxante com área infantil e deck completo para a família.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-navy mb-2 uppercase text-[0.7rem] tracking-widest">Espaço Gourmet</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">Churrasqueira profissional e infraestrutura para confraternizações.</p>
                                </div>
                            </div>

                            <button className="w-full bg-navy text-white hover:bg-primary py-5 rounded-2xl font-black uppercase tracking-[3px] text-sm transition-all hover:translate-y-[-4px] shadow-xl hover:shadow-primary/20">
                                Ver Horários e Reservas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeisureSection;
