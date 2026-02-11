import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <span className="hero-tag">205ª Subseção Miracatu / SP</span>
                <h1>OAB Miracatu<span>205ª Subseção</span></h1>
                <p>
                    Voz Ativa e Valorização Profissional em Miracatu e Região.
                    Excelência técnica, ética inabalável e compromisso com o futuro da advocacia no Vale do Ribeira.
                </p>
                <div className="hero-btns">
                    <a href="#services" className="btn-primary">Nossos Serviços</a>
                    <a href="#management" className="btn-secondary">Conheça a Diretoria</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
