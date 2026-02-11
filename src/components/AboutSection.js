import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section container">
            <div className="about-content">
                <div className="about-text">
                    <span className="section-tag">Institucional</span>
                    <h2>Compromisso com o Direito, <br /><span>Voz para a Advocacia</span></h2>
                    <p>
                        A OAB Miracatu – 205ª Subseção é um pilar de dedicação e ética, fundamentada no compromisso
                        inabalável de seus membros em defender os princípios fundamentais da nossa classe.
                        No coração do Vale do Ribeira, atuamos como a guardiã das prerrogativas profissionais,
                        unindo tradição e excelência técnica.
                    </p>
                    <p>
                        Sob a liderança da atual diretoria, composta por Marcos Aurélio da Silva Freire,
                        Antonio Camargo Souza, Aline Aparecida Jaze Wolpert,
                        Luiz Gustavo Mota de Souza e Maria Luiza Gonçalves Arteiro,
                        nossa missão é exercer as atribuições institucionais com transparência, garantindo que o
                        Estatuto da Advocacia seja cumprido em sua plenitude para fortalecer a cidadania e a justiça.
                    </p>
                </div>
                <div className="about-image-wrapper">
                    <div className="experience-badge">
                        <span className="years">205ª</span>
                        <span className="label">Subseção<br />Miracatu</span>
                    </div>
                    <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80" alt="Justiça" className="about-img" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
