import React from 'react';
import '../styles/Commissions.css';

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
        <div className="commissions-page">
            <header className="commissions-header">
                <div className="container">
                    <h1>Comissões Temáticas</h1>
                    <p>Órgãos auxiliares da subseção voltados ao estudo e fortalecimento de pautas específicas da advocacia e sociedade.</p>
                </div>
            </header>

            <section className="commissions-list container">
                <div className="commissions-grid">
                    {commissionsData.map((commission, index) => (
                        <div key={index} className="commission-card">
                            <div className="card-accent"></div>
                            <h3>{commission.name}</h3>
                            <div className="president-info">
                                <strong>Presidente:</strong>
                                <span>{commission.president}</span>
                            </div>
                            <button className="btn-consult">Consultar →</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="institutional-notes bg-light">
                <div className="container">
                    <div className="note-card">
                        <h2>Papel das Comissões</h2>
                        <p>
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
