import React from 'react';
import '../styles/QuickAccess.css';

const QuickAccess = () => {
    const services = [
        { id: 'caasp', name: 'CAASP', class: 'caasp', url: 'https://www.caasp.org.br/' },
        { id: 'esa', name: 'ESA', class: 'esa', url: 'https://esaoabsp.edu.br/' },
        { id: 'prev', name: 'OAB PREV', class: 'prev', url: 'https://www.oabprev-sp.org.br/' },
    ];

    return (
        <section id="services" className="quick-access">
            <div className="section-title">
                <h2>Serviços e Instituições</h2>
                <p>Acesso rápido aos principais portais da advocacia.</p>
            </div>
            <div className="cards-container">
                {services.map((service) => (
                    <a key={service.id} href={service.url} target="_blank" rel="noopener noreferrer" className={`card ${service.class}`}>
                        <div className="card-logo">OAB</div>
                        <div className="card-name">{service.name}</div>
                        <div className="card-btn">Acessar Portal →</div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default QuickAccess;
