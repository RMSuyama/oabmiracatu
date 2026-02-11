import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-20 lg:py-32 px-6 sm:px-10 max-w-[1200px] mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 animate-in slide-in-from-left duration-1000 border-l-4 border-primary pl-6 lg:pl-10">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-[0.7rem] uppercase tracking-widest rounded mb-6">
                        Institucional
                    </span>
                    <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[4rem] font-bold leading-tight mb-8 text-navy">
                        Compromisso com o Direito, <br />
                        <span className="text-primary italic">Voz para a Advocacia</span>
                    </h2>
                    <div className="space-y-6 text-slate-600 text-lg lg:text-xl leading-relaxed font-light">
                        <p>
                            A OAB Miracatu – 205ª Subseção é um pilar de dedicação e ética, fundamentada no compromisso
                            inabalável de seus membros em defender os princípios fundamentais da nossa classe.
                            No coração do Vale do Ribeira, atuamos como a guardiã das prerrogativas profissionais,
                            unindo tradição e excelência técnica.
                        </p>
                        <p>
                            Sob a liderança da atual diretoria, composta por Marcos Aurélio da Silva Freire,
                            Antonio Camargo Souza, Aline Aparecida Jaze Wolpert,
                            Luiz Gustavo Mota de Souza e Maria Luiza Gonçalves Arteiro,
                            nossa missão é exercer as atribuições institucionais com transparência, garantindo que o
                            Estatuto da Advocacia seja cumprido em sua plenitude para fortalecer a cidadania e a justiça.
                        </p>
                    </div>
                </div>

                <div className="relative order-1 lg:order-2 group">
                    {/* Floating Badge */}
                    <div className="absolute top-10 -left-6 lg:-left-12 bg-navy text-white p-6 lg:p-8 rounded-xl shadow-2xl z-20 text-center animate-bounce-slow">
                        <span className="block text-4xl lg:text-5xl font-extrabold text-[#ffd700] mb-1 font-serif">205ª</span>
                        <span className="text-[0.65rem] uppercase tracking-[3px] font-bold leading-tight">Subseção<br />Miracatu</span>
                    </div>

                    {/* Image with Decorative Border */}
                    <div className="relative p-5">
                        <div className="absolute inset-0 bg-gold/10 rounded-2xl transform translate-x-6 translate-y-6 lg:translate-x-10 lg:translate-y-10 -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80"
                            alt="Justiça"
                            className="w-full h-[350px] lg:h-[600px] object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
