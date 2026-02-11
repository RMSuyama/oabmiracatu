import React from 'react';

const commissionsData = [
    { name: "Advocacia Assalariada", president: "Dra. Maria Oliveira" },
    { name: "Advocacia Pública", president: "Dr. João Silva" },
    { name: "Defesa do Consumidor", president: "Dra. Ana Costa" },
    { name: "Direito das Pessoas com Deficiência", president: "Dr. Carlos Santos" },
    { name: "Direitos da Pessoa Idosa", president: "Dra. Beatriz Lima" },
    { name: "Direitos e Prerrogativas", president: "Dr. Ricardo Pereira" },
    { name: "Direitos Humanos", president: "Dra. Fernanda Souza" },
    { name: "Diversidade Sexual e de Gênero", president: "Dr. Paulo Rocha" },
    { name: "Estágio", president: "Dra. Juliana Mendes" },
    { name: "Exame de Ordem", president: "Dr. Roberto Almeida" },
    { name: "Governança e Integridade", president: "Dra. Patrícia Gomes" },
    { name: "Igualdade Racial", president: "Dr. Luiz Barbosa" },
    { name: "Legislação, Doutrina e Jurisprudência", president: "Dra. Cláudia Martins" },
    { name: "Meio Ambiente", president: "Dr. André Ferreira" },
    { name: "Mulheres Advogadas", president: "Dra. Simone Alves" },
    { name: "Obras", president: "Dr. Marcelo Xavier" },
    { name: "Orçamento", president: "Dra. Luciana Ramos" },
    { name: "Resgate da Memória", president: "Dr. Henrique Lima" },
    { name: "Seleção e Inscrição", president: "Dra. Camila Castro" },
    { name: "Sociedades de Advocacia", president: "Dr. Gustavo Borges" }
];

const Commissions = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Header */}
            <header className="bg-navy text-white pt-32 pb-20 text-center">
                <div className="max-w-[1200px] mx-auto px-5">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif">Comissões Temáticas</h1>
                    <p className="text-lg lg:text-xl opacity-80 max-w-2xl mx-auto font-light leading-relaxed">
                        Órgãos auxiliares da subseção voltados ao estudo e fortalecimento de pautas específicas da advocacia e sociedade.
                    </p>
                </div>
            </header>

            {/* Commissions Grid */}
            <section className="max-w-[1200px] mx-auto px-5 py-24 lg:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {commissionsData.map((commission, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-xl p-8 lg:p-10 relative overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl hover:border-primary/20 group">
                            <div className="absolute top-0 left-0 w-10 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
                            <h3 className="text-xl lg:text-2xl font-bold text-navy mb-8 font-serif leading-tight group-hover:text-primary transition-colors">
                                {commission.name}
                            </h3>
                            <div className="mb-8">
                                <span className="block text-primary font-black text-[0.65rem] uppercase tracking-widest mb-2 opacity-60 group-hover:opacity-100 transition-opacity">Presidente</span>
                                <span className="text-lg font-semibold text-navy opacity-90 group-hover:opacity-100">{commission.president}</span>
                            </div>
                            <button className="bg-transparent border border-navy text-navy px-5 py-2 rounded font-bold text-[0.7rem] uppercase tracking-wider transition-all hover:bg-navy hover:text-white">
                                Consultar →
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Institutional Note Section */}
            <section className="bg-white py-24 lg:py-32">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <div className="bg-slate-50 p-12 lg:p-20 rounded-2xl shadow-inner border border-slate-100">
                        <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-8 font-serif">Papel das Comissões</h2>
                        <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-light">
                            As comissões da OAB Miracatu desempenham um papel vital na análise técnica de legislações,
                            promoção de eventos acadêmicos e defesa intransigente dos direitos fundamentais.
                            Cada comissão é composta por advogados voluntários comprometidos com a excelência técnica e ética.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Commissions;
