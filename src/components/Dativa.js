import React from 'react';
import '../styles/InstitutionalPage.css';

const Dativa = () => {
    return (
        <div className="institutional-page">
            <header className="page-header">
                <div className="container">
                    <h1>Convênio Advocacia Dativa</h1>
                    <p>Assistência Jurídica Gratuita em convênio com a Defensoria Pública do Estado de São Paulo.</p>
                </div>
            </header>

            <section className="page-content container">
                <div className="info-box accent-border">
                    <h2>Sobre o Convênio</h2>
                    <p>
                        A Ordem dos Advogados do Brasil Seção São Paulo mantém um convênio com a Defensoria Pública do Estado de São Paulo
                        para a prestação de assistência jurídica gratuita para a população com vulnerabilidade econômica.
                    </p>
                </div>

                <div className="content-grid">
                    <div className="info-card">
                        <h3>Inscrições e Prazos</h3>
                        <p>
                            O edital para inscrição ocorre ao menos uma vez ao ano. É possível se inscrever como pessoa física ou
                            sociedade unipessoal (vedada a utilização de ambas as qualificações).
                        </p>
                        <ul className="info-list">
                            <li>RG, CPF ou CNPJ</li>
                            <li>Comprovante de Endereço Profissional</li>
                            <li>Inscrição no INSS ou PIS/PASEP</li>
                            <li>Certificado Digital ativo</li>
                            <li>Conta Corrente exclusiva no Banco do Brasil</li>
                        </ul>
                    </div>

                    <div className="info-card">
                        <h3>Áreas de Atuação</h3>
                        <p>O advogado poderá indicar as seguintes áreas:</p>
                        <div className="tags-container">
                            <span className="tag">Cível</span>
                            <span className="tag">Criminal</span>
                            <span className="tag">Júri</span>
                            <span className="tag">Infância e Juventude</span>
                            <span className="tag">Violência Doméstica</span>
                            <span className="tag">Plantão Cível/Criminal</span>
                        </div>
                    </div>
                </div>

                <div className="important-notice">
                    <h3>Atenção: Regras de Atuação</h3>
                    <p>
                        O substabelecimento é permitido uma única vez e para um único ato, desde que o substabelecido também seja conveniado na mesma Comarca.
                        A atuação é restrita à Comarca de inscrição, exceto para recursos nos Tribunais.
                    </p>
                </div>

                <div className="links-section">
                    <h3>Links Úteis - Defensoria Pública</h3>
                    <div className="btn-group">
                        <a href="https://www.defensoria.sp.def.br/transparencia/portal-da-transparencia/convenios/convenio-oab/editais-oab" target="_blank" rel="noopener noreferrer" className="btn-institutional">Editais OAB</a>
                        <a href="https://www.defensoria.sp.def.br/transparencia/portal-da-transparencia/convenios/convenio-oab/honorarios" target="_blank" rel="noopener noreferrer" className="btn-institutional">Tabela de Honorários</a>
                        <a href="https://www.defensoria.sp.def.br/institucional/defensoria-publica-geral/assessorias/assessoria-de-convenios/convenio-oab" target="_blank" rel="noopener noreferrer" className="btn-institutional">Informações Gerais</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dativa;
