import React from 'react';
import '../styles/LeisureSection.css';

const LeisureSection = () => {
    return (
        <section id="leisure" className="leisure-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Exclusivo para Inscritos</span>
                    <h2>Lazer e Bem-estar</h2>
                    <p>Espaços projetados para o descanso e a confraternização da advocacia do Vale do Ribeira.</p>
                </div>

                <div className="leisure-featured">
                    <div className="leisure-card-registro">
                        <div className="leisure-image registro-img">
                            <div className="image-badge">Registro / SP</div>
                        </div>
                        <div className="leisure-info-full">
                            <div className="info-header">
                                <h3>Área de Lazer da Advocacia</h3>
                                <p className="location-tag">📍 Estrada Municipal, Registro - SP</p>
                            </div>
                            <div className="info-grid">
                                <div className="info-col">
                                    <h4>Piscina Recreativa</h4>
                                    <p>Ambiente relaxante com área infantil e deck completo para a família.</p>
                                </div>
                                <div className="info-col">
                                    <h4>Espaço Gourmet</h4>
                                    <p>Churrasqueira profissional e infraestrutura para confraternizações.</p>
                                </div>
                            </div>
                            <button className="btn-primary-large">Ver Horários e Reservas</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeisureSection;
