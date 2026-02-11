import React from 'react';
import '../styles/InstitutionalPage.css';

const Honorarios = () => {
    return (
        <div className="institutional-page">
            <header className="page-header">
                <div className="container">
                    <h1>Honorários Advocatícios</h1>
                    <p>Informações sobre a tabela de honorários e modalidades de remuneração da classe.</p>
                </div>
            </header>

            <section className="page-content container">
                <div className="honorarios-grid">
                    <div className="honorario-type-card">
                        <h3>Arbitramento Judicial</h3>
                        <p>
                            Honorários estabelecidos por determinação do magistrado em cenários onde não houve pacto prévio entre as partes
                            ou em designações dativas. O valor reflete o zelo, o tempo dedicado e o grau de complexidade da causa.
                        </p>
                    </div>

                    <div className="honorario-type-card">
                        <h3>Modelos Assistenciais</h3>
                        <p>
                            Projetados para garantir a sustentabilidade da advocacia em parcerias oficiais (como a Defensoria Pública)
                            ou em atuações sindicais em prol de categorias específicas.
                        </p>
                    </div>

                    <div className="honorario-type-card">
                        <h3>Honorários de Sucumbência</h3>
                        <p>
                            A retribuição financeira imposta à parte vencida, celebrando o sucesso do advogado da parte vencedora,
                            conforme os parâmetros modernos estabelecidos pelo CPC e pela legislação trabalhista.
                        </p>
                    </div>

                    <div className="honorario-type-card">
                        <h3>Honorários Contratuais</h3>
                        <p>
                            A base da autonomia profissional. Honorários definidos em contrato, fundamentados na confiança cliente-advogado
                            e regidos pela ética profissional, independente do desfecho final do litígio.
                        </p>
                    </div>
                </div>

                <div className="tabela-section">
                    <div className="tabela-card">
                        <h2>Parâmetros de Cobrança OAB/SP</h2>
                        <p>Acesse o guia oficial de valores para nortear sua prática profissional com transparência, segurança e prestígio.</p>
                        <a href="https://www.oabsp.org.br/upload/1885288261.pdf" target="_blank" rel="noopener noreferrer" className="btn-download">
                            Consultar Guia de Valores (PDF) →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Honorarios;
