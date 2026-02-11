import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h2>OAB <span>Miracatu</span></h2>
                    <p>
                        205ª Subseção OAB Miracatu - SP.<br />
                        Valorizando a Advocacia do Vale do Ribeira.
                    </p>
                    <div className="address">
                        <strong>Sede Miracatu:</strong> Rua Isidoro Da Silva Leite, 120<br />
                        <strong>Polo Juquiá:</strong> Rua Major Martins Coelho, 438
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Institucional</h3>
                    <ul>
                        <li><a href="/diretoria">Diretoria</a></li>
                        <li><a href="/sedes">Nossas Sedes</a></li>
                        <li><a href="/comissoes">Comissões Temáticas</a></li>
                        <li><a href="/dativa">Assistência Dativa</a></li>
                        <li><a href="/honorarios">Honorários</a></li>
                        <li><a href="/lazer">Lazer e Convênios</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} OAB Miracatu - 205ª Subseção. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
