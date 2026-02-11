import React from 'react';
import '../styles/JuquiaSection.css';

const JuquiaSection = () => {
    return (
        <section id="juquia" className="juquia-section">
            <div className="container">
                <div className="juquia-content">
                    <div className="juquia-text">
                        <span className="section-tag">Nossa Sede</span>
                        <h2>Casa da Advocacia de Juquiá</h2>
                        <p>
                            Localizada estrategicamente para atender os advogados da região,
                            nossa sede em Juquiá oferece suporte institucional completo e um
                            ambiente acolhedor para o exercício da profissão.
                        </p>
                        <ul className="juquia-info">
                            <li>
                                <strong>Horário de Atendimento:</strong>
                                <span>Segunda a Sexta, das 09:00 às 18:00</span>
                            </li>
                            <li>
                                <strong>Endereço:</strong>
                                <span>Av. Brasil, 456 - Centro, Juquiá/SP</span>
                            </li>
                        </ul>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            Ver no Mapa
                        </a>
                    </div>
                    <div className="juquia-image-placeholder">
                        <div className="image-overlay">
                            <span>Sede Juquiá</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JuquiaSection;
