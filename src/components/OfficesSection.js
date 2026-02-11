import sedeMiracatu from '../assets/sede-miracatu.webp';
import sedeJuquia from '../assets/sede-juquia.jpg';
import '../styles/OfficesSection.css';

const OfficesSection = () => {
    // Escaped addresses for Google Maps URL
    const miractuMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.266185854722!2d-47.4628285!3d-24.2859187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf9f9d774f7677%3A0xe5f9b4f9f4f4f4f4!2sRua%20Isidoro%20Da%20Silva%20Leite%2C%20120%2C%20Miracatu%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";
    const juquiaMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.845624854722!2d-47.64333!3d-24.31667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf9f9d774f7677%3A0xe5f9b4f9f4f4f4f4!2sRua%20Major%20Martins%20Coelho%2C%20438%2C%20Juqui%C3%A1%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

    return (
        <section id="offices" className="offices-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Presença Regional</span>
                    <h2>Nossas Sedes</h2>
                    <p>
                        A 205ª Subseção Miracatu conta com sua estrutura principal e o suporte fundamental do Polo Juquiá.
                    </p>
                </div>

                <div className="offices-grid">
                    {/* Miracatu - Headquarters */}
                    <div className="office-card">
                        <div className="office-media">
                            <img src={sedeMiracatu} alt="Sede OAB Miracatu" className="office-photo" />
                        </div>
                        <div className="office-content">
                            <div className="office-info">
                                <span className="office-type">Sede da 205ª Subseção</span>
                                <h3>Miracatu (SP)</h3>
                                <p>Centro administrativo e institucional da advocacia local.</p>
                                <ul className="details">
                                    <li><strong>Endereço:</strong> Rua Isidoro Da Silva Leite, 120</li>
                                    <li><strong>CEP:</strong> 11850-000</li>
                                    <li><strong>Horário:</strong> Seg. a Sex. das 09h às 18h</li>
                                </ul>
                            </div>
                            <div className="office-map">
                                <iframe
                                    src={miractuMapUrl}
                                    width="100%" height="200"
                                    style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mapa Miracatu"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Juquiá - Polo */}
                    <div className="office-card">
                        <div className="office-media">
                            <img src={sedeJuquia} alt="Polo OAB Juquiá" className="office-photo" />
                        </div>
                        <div className="office-content">
                            <div className="office-info">
                                <span className="office-type">Polo de Atendimento</span>
                                <h3>Juquiá (SP)</h3>
                                <p>Suporte jurídico e institucional estratégico no Vale do Ribeira.</p>
                                <ul className="details">
                                    <li><strong>Endereço:</strong> Rua Major Martins Coelho, 438</li>
                                    <li><strong>CEP:</strong> 11950-000</li>
                                    <li><strong>Horário:</strong> Seg. a Sex. das 09h às 18h</li>
                                </ul>
                            </div>
                            <div className="office-map">
                                <iframe
                                    src={juquiaMapUrl}
                                    width="100%" height="200"
                                    style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mapa Juquiá"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficesSection;
