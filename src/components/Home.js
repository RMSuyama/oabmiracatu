import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import QuickAccess from './QuickAccess';
import EventsPanel from './EventsPanel';
import AboutSection from './AboutSection';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <QuickAccess />
            <AboutSection />
            <EventsPanel />
            <section className="home-institutional-cta">
                <div className="container">
                    <div className="cta-grid">
                        <Link to="/diretoria" className="cta-card">
                            <h3>Nossa Diretoria</h3>
                            <p>Conheça os representantes da 205ª Subseção.</p>
                            <span className="btn-text">Conheça a Diretoria →</span>
                        </Link>
                        <Link to="/sedes" className="cta-card">
                            <h3>Nossas Sedes</h3>
                            <p>Localização e contatos da Sede e Polos.</p>
                            <span className="btn-text">Ver Endereços →</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
