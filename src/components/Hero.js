import React from 'react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[85vh] lg:h-screen flex items-center justify-center text-center px-5 mt-[90px] overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "linear-gradient(rgba(176, 28, 41, 0.9), rgba(176, 28, 41, 0.95)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')"
            }}
        >
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-slate-50 to-transparent z-10"></div>

            <div className="relative max-w-[900px] z-20 text-white animate-in fade-in zoom-in duration-1000">
                <span className="inline-block px-4 py-2 bg-black/20 rounded font-bold text-[0.8rem] uppercase tracking-[2px] mb-6">
                    205ª Subseção Miracatu / SP
                </span>

                <h1 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-[900] leading-[0.85] mb-6 drop-shadow-2xl">
                    OAB Miracatu
                    <span className="block mt-4 text-[1.2rem] font-medium uppercase tracking-[4px] text-[#ffd700] opacity-90">
                        205ª Subseção
                    </span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90 max-w-[700px] mx-auto mb-12">
                    Voz Ativa e Valorização Profissional em Miracatu e Região.
                    Excelência técnica, ética inabalável e compromisso com o futuro da advocacia no Vale do Ribeira.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        href="#services"
                        className="bg-white text-navy px-12 py-5 rounded-full font-extrabold text-[0.95rem] uppercase tracking-wider transition-all hover:translate-y-[-5px] hover:bg-primary hover:text-white shadow-xl"
                    >
                        Nossos Serviços
                    </a>
                    <a
                        href="#management"
                        className="bg-white/15 backdrop-blur-md border border-white/40 text-white px-12 py-5 rounded-full font-bold text-[0.95rem] uppercase tracking-wider transition-all hover:translate-y-[-5px] hover:bg-white/30"
                    >
                        Conheça a Diretoria
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
