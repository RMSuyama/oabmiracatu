import React from 'react';

const Dativa = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header Section */}
            <header className="bg-navy text-white pt-32 pb-20 text-center">
                <div className="max-w-[1200px] mx-auto px-5">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif leading-tight">Convênio Advocacia Dativa</h1>
                    <p className="text-lg lg:text-xl opacity-80 max-w-3xl mx-auto font-light">Assistência Jurídica Gratuita em convênio com a Defensoria Pública do Estado de São Paulo.</p>
                </div>
            </header>

            <div className="max-w-[1200px] mx-auto px-5 py-20 lg:py-24">
                {/* Intro Box */}
                <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border-l-[6px] border-primary mb-12">
                    <h2 className="text-3xl font-bold text-navy mb-6 font-serif">Sobre o Convênio</h2>
                    <p className="text-lg text-slate-500 leading-relaxed font-light">
                        A Ordem dos Advogados do Brasil Seção São Paulo mantém um convênio com a Defensoria Pública do Estado de São Paulo
                        para a prestação de assistência jurídica gratuita para a população com vulnerabilidade econômica.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                    {/* Inscriptions Card */}
                    <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-navy mb-6 font-serif">Inscrições e Prazos</h3>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            O edital para inscrição ocorre ao menos uma vez ao ano. É possível se inscrever como pessoa física ou
                            sociedade unipessoal (vedada a utilização de ambas as qualificações).
                        </p>
                        <ul className="space-y-4 text-navy">
                            {[
                                "RG, CPF ou CNPJ",
                                "Comprovante de Endereço Profissional",
                                "Inscrição no INSS ou PIS/PASEP",
                                "Certificado Digital ativo",
                                "Conta Corrente exclusiva no Banco do Brasil"
                            ].map((item, id) => (
                                <li key={id} className="flex items-center gap-3">
                                    <span className="text-primary font-black">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Areas of Practice Card */}
                    <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-navy mb-6 font-serif">Áreas de Atuação</h3>
                        <p className="text-slate-500 mb-8 font-light">O advogado poderá indicar as seguintes áreas:</p>
                        <div className="flex flex-wrap gap-3">
                            {["Cível", "Criminal", "Júri", "Infância e Juventude", "Violência Doméstica", "Plantão Cível/Criminal"].map((tag, id) => (
                                <span key={id} className="bg-slate-50 text-navy px-4 py-2 rounded-lg font-bold text-sm tracking-wide border border-slate-100 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Rules Section */}
                <div className="bg-rose-50 border border-rose-200 p-10 rounded-2xl mb-12">
                    <h3 className="text-2xl font-bold text-rose-900 mb-4 font-serif">Atenção: Regras de Atuação</h3>
                    <p className="text-rose-800 leading-relaxed font-medium">
                        O substabelecimento é permitido uma única vez e para um único ato, desde que o substabelecido também seja conveniado na mesma Comarca.
                        A atuação é restrita à Comarca de inscrição, exceto para recursos nos Tribunais.
                    </p>
                </div>

                {/* Links Section */}
                <div className="bg-navy p-12 lg:p-16 rounded-3xl text-white">
                    <h3 className="text-3xl font-bold mb-10 font-serif text-center">Links Úteis — Defensoria Pública</h3>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a
                            href="https://www.defensoria.sp.def.br/transparencia/portal-da-transparencia/convenios/convenio-oab/editais-oab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-navy px-10 py-4 rounded-xl font-bold text-center uppercase tracking-widest transition-all hover:bg-primary hover:text-white hover:translate-y-[-3px]"
                        >
                            Editais OAB
                        </a>
                        <a
                            href="https://www.defensoria.sp.def.br/transparencia/portal-da-transparencia/convenios/convenio-oab/honorarios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-navy px-10 py-4 rounded-xl font-bold text-center uppercase tracking-widest transition-all hover:bg-primary hover:text-white hover:translate-y-[-3px]"
                        >
                            Tabela de Honorários
                        </a>
                        <a
                            href="https://www.defensoria.sp.def.br/institucional/defensoria-publica-geral/assessorias/assessoria-de-convenios/convenio-oab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-navy px-10 py-4 rounded-xl font-bold text-center uppercase tracking-widest transition-all hover:bg-primary hover:text-white hover:translate-y-[-3px]"
                        >
                            Informações Gerais
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dativa;
