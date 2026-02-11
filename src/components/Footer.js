import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-navy text-white pt-20">
            <div className="max-w-[1200px] mx-auto px-5 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                    <div className="col-span-1 lg:col-span-1">
                        <h2 className="text-3xl font-bold mb-6 font-serif">OAB <span className="text-primary italic">Miracatu</span></h2>
                        <p className="text-white/60 leading-relaxed mb-8 font-light italic">
                            205ª Subseção OAB Miracatu - SP. <br />
                            Valorizando a Advocacia do Vale do Ribeira.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="text-primary font-bold">📍</span>
                                <p className="text-sm text-white/80"><strong className="text-white">Sede Miracatu:</strong><br /> Rua Isidoro Da Silva Leite, 120</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-primary font-bold">📍</span>
                                <p className="text-sm text-white/80"><strong className="text-white">Polo Juquiá:</strong><br /> Rua Major Martins Coelho, 438</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-8 font-serif border-b border-white/10 pb-4">Institucional</h3>
                        <ul className="space-y-4 text-white/70">
                            <li><a href="/diretoria" className="hover:text-primary transition-colors">Diretoria</a></li>
                            <li><a href="/sedes" className="hover:text-primary transition-colors">Nossas Sedes</a></li>
                            <li><a href="/comissoes" className="hover:text-primary transition-colors">Comissões Temáticas</a></li>
                            <li><a href="/dativa" className="hover:text-primary transition-colors">Assistência Dativa</a></li>
                            <li><a href="/honorarios" className="hover:text-primary transition-colors">Honorários</a></li>
                            <li><a href="/lazer" className="hover:text-primary transition-colors">Lazer e Convênios</a></li>
                        </ul>
                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 lg:self-start">
                        <h3 className="text-xl font-bold mb-4 font-serif">Atendimento</h3>
                        <p className="text-sm text-white/60 leading-relaxed mb-6">Estamos prontos para atender as necessidades da classe e da sociedade.</p>
                        <a href="mailto:miracatu@oabsp.org.br" className="block text-center bg-primary text-white py-3 rounded-lg font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-navy">
                            Email Oficial
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 py-8 bg-black/20 text-center text-[0.7rem] text-white/40 uppercase tracking-[2px] font-bold">
                &copy; {new Date().getFullYear()} OAB Miracatu - 205ª Subseção. Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;
