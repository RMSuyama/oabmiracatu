import React from 'react';

const JuquiaSection = () => {
    return (
        <section id="juquia" className="py-20 lg:py-32 bg-slate-50 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="animate-in slide-in-from-left duration-1000">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-[0.7rem] uppercase tracking-widest rounded mb-6">
                            Sede Regional
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8 font-serif leading-tight">Polo de Atendimento Juquiá</h2>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-light mb-10">
                            Localizada estrategicamente para atender os advogados da região,
                            nossa sede em Juquiá oferece suporte institucional completo e um
                            ambiente acolhedor para o exercício da profissão no Vale do Ribeira.
                        </p>
                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border-l-4 border-primary">
                                <div className="text-2xl mt-1">🕒</div>
                                <div>
                                    <h4 className="font-bold text-navy uppercase text-[0.7rem] tracking-widest mb-1">Horário de Atendimento</h4>
                                    <p className="text-slate-600">Segunda a Sexta, das 09:00 às 18:00</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border-l-4 border-navy">
                                <div className="text-2xl mt-1">📍</div>
                                <div>
                                    <h4 className="font-bold text-navy uppercase text-[0.7rem] tracking-widest mb-1">Endereço</h4>
                                    <p className="text-slate-600">Rua Major Martins Coelho, 438 - Centro, Juquiá/SP</p>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border-2 border-primary text-primary px-10 py-3 rounded-lg font-bold uppercase tracking-widest transition-all hover:bg-primary hover:text-white"
                        >
                            Ver no Mapa
                        </a>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-8 translate-y-8 -z-10 group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-500"></div>
                        <div className="h-[400px] lg:h-[500px] bg-navy rounded-2xl overflow-hidden relative shadow-2xl border border-white/10">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                                <span className="text-white/20 text-6xl lg:text-8xl font-black absolute top-10 select-none">OAB</span>
                                <h3 className="text-white text-3xl font-bold relative z-10 font-serif mb-4">Sede Juquiá</h3>
                                <p className="text-primary font-bold uppercase tracking-[4px] text-xs">Exclusividade e Suporte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JuquiaSection;
