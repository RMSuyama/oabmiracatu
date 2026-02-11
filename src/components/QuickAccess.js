import React from 'react';

const QuickAccess = () => {
    const services = [
        { id: 'caasp', name: 'CAASP', class: 'from-blue-600 to-blue-800', url: 'https://www.caasp.org.br/' },
        { id: 'esa', name: 'ESA', class: 'from-amber-500 to-amber-700', url: 'https://esaoabsp.edu.br/' },
        { id: 'prev', name: 'OAB PREV', class: 'from-navy to-slate-800', url: 'https://www.oabprev-sp.org.br/' },
    ];

    return (
        <section id="services" className="py-24 lg:py-32 bg-slate-50">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6 font-serif">Serviços e Instituições</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">Acesso rápido aos principais portais da advocacia e benefícios da classe.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <a
                            key={service.id}
                            href={service.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative overflow-hidden bg-gradient-to-br ${service.class} p-10 lg:p-12 rounded-2xl shadow-xl transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl`}
                        >
                            {/* Decorative Glass Circle */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="bg-white/20 backdrop-blur-md w-16 h-16 flex items-center justify-center rounded-xl font-black text-white text-xl border border-white/20 mb-10 group-hover:bg-white group-hover:text-navy transition-all">
                                    OAB
                                </div>
                                <div>
                                    <h3 className="text-white text-3xl font-bold mb-4 font-serif">{service.name}</h3>
                                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Acessar Portal <span className="text-xl">→</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickAccess;
