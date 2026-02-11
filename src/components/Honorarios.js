import React from 'react';

const Honorarios = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Header */}
            <header className="bg-navy text-white pt-32 pb-20 text-center">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif leading-tight">Honorários Advocatícios</h1>
                    <p className="text-lg lg:text-xl opacity-80 max-w-2xl mx-auto font-light leading-relaxed">Informações sobre a tabela de honorários e modalidades de remuneração da classe.</p>
                </div>
            </header>

            <section className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
                {/* Honorarios Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary">
                        <h3 className="text-2xl font-bold text-navy mb-6 font-serif">Arbitramento Judicial</h3>
                        <p className="text-slate-600 leading-relaxed font-light">
                            Honorários estabelecidos por determinação do magistrado em cenários onde não houve pacto prévio entre as partes
                            ou em designações dativas. O valor reflete o zelo, o tempo dedicado e o grau de complexidade da causa.
                        </p>
                    </div>

                    <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary">
                        <h3 className="text-2xl font-bold text-navy mb-6 font-serif">Honorários Assistenciais</h3>
                        <p className="text-slate-600 leading-relaxed font-light">
                            Projetados para garantir a sustentabilidade da advocacia em parcerias oficiais (como a Defensoria Pública)
                            ou em atuações sindicais em prol de categorias específicas.
                        </p>
                    </div>

                    <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary">
                        <h3 className="text-2xl font-bold text-navy mb-6 font-serif">Honorários de Sucumbência</h3>
                        <p className="text-slate-600 leading-relaxed font-light">
                            A retribuição financeira imposta à parte vencida, celebrando o sucesso do advogado da parte vencedora,
                            conforme os parâmetros modernos estabelecidos pelo CPC e pela legislação trabalhista.
                        </p>
                    </div>

                    <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary">
                        <h3 className="text-2xl font-bold text-navy mb-6 font-serif">Honorários Contratuais</h3>
                        <p className="text-slate-600 leading-relaxed font-light">
                            A base da autonomia profissional. Honorários definidos em contrato, fundamentados na confiança cliente-advogado
                            e regidos pela ética profissional, independente do desfecho final do litígio.
                        </p>
                    </div>
                </div>

                {/* Tabela Section */}
                <div className="bg-white p-10 lg:p-16 rounded-3xl border border-slate-200 text-center shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-navy to-primary"></div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6 font-serif">Parâmetros de Cobrança OAB/SP</h2>
                    <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-light">Acesse o guia oficial de valores para nortear sua prática profissional com transparência, segurança e prestígio.</p>
                    <a
                        href="https://www.oabsp.org.br/upload/1885288261.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest transition-all hover:bg-navy hover:translate-y-[-3px] hover:shadow-xl"
                    >
                        Consultar Guia de Valores (PDF) →
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Honorarios;
