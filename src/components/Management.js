import React from 'react';
import '../styles/Management.css';
import presidentImg from '../assets/president.png';
import '../styles/HistoryBoard.css';

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
        <div className="diretoria-page">
            <header className="page-header">
                <div className="container">
                    <h1>Diretoria Executiva</h1>
                    <p>Gestão 2025 – 2027: Compromisso e Renovação</p>
                </div>
            </header>

            <section className="president-featured container">
                <div className="president-card-premium">
                    <div className="p-image-container">
                        <img src={presidentImg} alt="Presidente" className="p-image" />
                    </div>
                    <div className="p-info">
                        <span className="p-label">Presidente da 205ª Subseção</span>
                        <h2>Marcos Aurélio Da Silva Freire</h2>
                        <p className="p-quote">"Liderando com ética e transparência para fortalecer a advocacia do Vale do Ribeira."</p>
                    </div>
                </div>
            </section>

            <section className="board-members-section container">
                <div className="board-grid">
                    {executive.filter(m => !m.highlight).map((member, index) => (
                        <div key={index} className="board-card">
                            <span className="member-role">{member.role}</span>
                            <h3 className="member-name">{member.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="institutional-mission bg-light">
                <div className="container">
                    <div className="mission-content">
                        <h2>Nossa Missão</h2>
                        <p>
                            A diretoria da OAB Miracatu trabalha incansavelmente para garantir as prerrogativas profissionais,
                            promover a educação continuada e aproximar a Ordem da sociedade civil,
                            zelando sempre pela justiça e pelo Estado Democrático de Direito.
                        </p>
                    </div>
                </div>
            </section>

            <section className="history-section container">
                <div className="section-header center">
                    <span className="section-tag">Nossa História</span>
                    <h2>Galeria de Mandatos Anteriores</h2>
                    <p>Homenagem àqueles que dedicaram seu tempo e liderança à nossa Subseção.</p>
                </div>

                <div className="timeline-grid board-grid">
                    {historicalMandates.map((item, index) => (
                        <div key={index} className="history-card board-card">
                            <div className="period-badge">{item.period}</div>
                            <div className="h-info">
                                <span className="h-label">Presidente</span>
                                <h3 className="member-name">{item.president}</h3>
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
        </div>
    );
};

export default Management;
