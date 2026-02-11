import React from 'react';
import presidentImg from '../assets/president.png';

const Management = () => {
    const executive = [
        { role: 'Presidente', name: 'Marcos Aurélio Da Silva Freire', highlight: true },
        { role: 'Vice-Presidente', name: 'Antonio Camargo Souza' },
        { role: 'Secretária Geral', name: 'Nelma Aguiar dos Santos Amaral' },
        { role: 'Secretário Adjunto', name: 'Luiz Gustavo Mota De Souza' },
        { role: 'Tesoureira', name: 'Aline Aparecida Jaze Wolpert' },
    ];

    const historicalMandates = [
        { period: '2022 - 2024', president: 'Marcos Aurélio Da Silva Freire', members: ['Voz da Advocacia: Gestão de Consolidação e Expansão'] },
        { period: '2019 - 2021', president: 'Renato Aparecido de Souza', members: ['Vice: Antonio Camargo Souza', 'Institucionalização do Polo Juquiá'] },
        { period: '2016 - 2018', president: 'Célio de Oliveira Santos', members: ['Inauguração da Nova Sede', 'Fortalecimento das Prerrogativas'] },
        { period: '2013 - 2015', president: 'Isidoro Da Silva Leite (In Memoriam)', members: ['Liderança Histórica e Unificação Regional'] },
        { period: '2010 - 2012', president: 'Luiz Gustavo Mota De Souza', members: ['Projeto OAB em Ação', 'Primeiros Passos Digitais'] },
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Header */}
            <header className="bg-navy text-white pt-32 pb-20 text-center">
                <div className="max-w-[1200px] mx-auto px-5">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-serif">Diretoria Executiva</h1>
                    <p className="text-xl opacity-80 font-light italic">Gestão 2025 – 2027: Compromisso e Renovação</p>
                </div>
            </header>

            {/* President Featured Card */}
            <section className="max-w-[1000px] mx-auto px-5 -mt-10 mb-20 relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-[6px] border-primary flex flex-col md:flex-row items-center p-8 lg:p-16 gap-10 lg:gap-16">
                    <div className="w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0 rounded-full overflow-hidden border-8 border-slate-50 shadow-inner">
                        <img src={presidentImg} alt="Presidente" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <span className="inline-block text-primary font-black text-[0.7rem] uppercase tracking-[3px] mb-4">Presidente da 205ª Subseção</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6 font-serif leading-tight">
                            Marcos Aurélio Da Silva Freire
                        </h2>
                        <p className="text-xl lg:text-2xl text-slate-500 italic border-l-4 lg:border-l-0 lg:border-t-0 border-slate-200 pl-6 md:pl-0 leading-relaxed font-light">
                            "Liderando com ética e transparência para fortalecer a advocacia do Vale do Ribeira."
                        </p>
                    </div>
                </div>
            </section>

            {/* Board Members Grid */}
            <section className="max-w-[1200px] mx-auto px-5 mb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {executive.filter(m => !m.highlight).map((member, index) => (
                        <div key={index} className="bg-white p-10 rounded-xl border border-slate-100 text-center shadow-md transition-all hover:translate-y-[-5px] hover:border-primary/30 group">
                            <span className="block text-primary font-black text-[0.6rem] uppercase tracking-widest mb-3">{member.role}</span>
                            <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">{member.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Institutional Mission */}
            <section className="bg-navy py-24 lg:py-32 text-white">
                <div className="max-w-3xl mx-auto px-5 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-8 font-serif">Nossa Missão</h2>
                    <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                        A diretoria da OAB Miracatu trabalha incansavelmente para garantir as prerrogativas profissionais,
                        promover a educação continuada e aproximar a Ordem da sociedade civil,
                        zelando sempre pela justiça e pelo Estado Democrático de Direito.
                    </p>
                </div>
            </section>

            {/* Historical Mandates Section */}
            <section className="max-w-[1200px] mx-auto px-5 py-32">
                <div className="text-center mb-20">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-extrabold text-[0.7rem] uppercase tracking-widest rounded mb-6">Nossa História</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6 font-serif">Galeria de Mandatos Anteriores</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Homenagem àqueles que dedicaram seu tempo e liderança à nossa Subseção.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {historicalMandates.map((item, index) => (
                        <div key={index} className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-50 shadow-lg relative group transition-all hover:shadow-2xl hover:border-primary/20">
                            <div className="absolute top-0 right-0 bg-navy text-white px-4 py-2 rounded-bl-xl font-bold text-xs tracking-widest group-hover:bg-primary transition-colors">
                                {item.period}
                            </div>
                            <div className="pt-4">
                                <span className="block text-primary font-black text-[0.6rem] uppercase tracking-tighter mb-2">Presidente</span>
                                <h3 className="text-2xl font-bold text-navy mb-6 font-serif">{item.president}</h3>
                                <ul className="space-y-3 opacity-70 text-sm">
                                    {item.members.map((member, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-primary">•</span> {member}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Management;
