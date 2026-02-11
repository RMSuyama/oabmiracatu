import React from 'react';
import '../styles/HistoryBoard.css';

const HistoryBoard = () => {
    const historicalMandates = [
        { period: '2022 - 2024', president: 'Marcos Aurélio Da Silva Freire', members: ['Diretoria Atual (Primeiro Mandato)'] },
        { period: '2019 - 2021', president: 'Dr. Exemplo Nome Sobrenome', members: ['Vice: Nome do Vice', 'Secretário: Nome do Sec'] },
        { period: '2016 - 2018', president: 'Dra. Advogada Ilustre', members: ['Diretoria de Expansão'] },
        { period: '2013 - 2015', president: 'Dr. Pioneiro da Subseção', members: ['Gestão de Fundação'] },
    ];

    return (
        <div className="history-page">
            <header className="page-header history-header">
                <div className="container">
                    <h1>Mural de Mandatos</h1>
                    <p>A história da 205ª Subseção construída por grandes nomes.</p>
                </div>
            </header>

            <section className="history-timeline container">
                <div className="timeline-grid">
                    {historicalMandates.map((item, index) => (
                        <div key={index} className="history-card">
                            <div className="period-badge">{item.period}</div>
                            <div className="h-info">
                                <h3>{item.president}</h3>
                                <span className="h-label">Presidente</span>
                                <ul className="h-members">
                                    {item.members.map((member, i) => (
                                        <li key={i}>{member}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="history-stats bg-navy text-light">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">12+</span>
                            <span className="stat-label">Anos de Atuação</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">205</span>
                            <span className="stat-label">Subseção Miracatu</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">Centenas</span>
                            <span className="stat-label">de Inscritos</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HistoryBoard;
