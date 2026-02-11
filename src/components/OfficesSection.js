import sedeMiracatu from '../assets/sede-miracatu.webp';
import sedeJuquia from '../assets/sede-juquia.jpg';

const OfficesSection = () => {
    const miractuMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14549.032371253457!2d-47.4628285!3d-24.2859187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf9f9d774f7677%3A0xe5f9b4f9f4f4f4f4!2sRua%20Isidoro%20Da%20Silva%20Leite%2C%20120%2C%20Miracatu%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1707620000000!5m2!1spt-BR!2sbr";
    const juquiaMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14543.434!2d-47.638!3d-24.316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf06f8e775317b%3A0x7d6c59c5c7d6c59c!2sOAB+V%C3%ADnculo+Juqui%C3%A1%2C+R.+Major+Martins+Coelho%2C+438+-+Centro%2C+Juqui%C3%A1+-+SP!5e0!3m2!1spt-BR!2sbr!4v1707620000000!5m2!1spt-BR!2sbr";

    const offices = [
        {
            id: 'miracatu',
            type: 'Sede da 205ª Subseção',
            city: 'Miracatu (SP)',
            desc: 'Centro administrativo e institucional da advocacia local.',
            address: 'Rua Isidoro Da Silva Leite, 120',
            cep: '11850-000',
            hours: 'Seg. a Sex. das 09h às 18h',
            image: sedeMiracatu,
            mapUrl: miractuMapUrl
        },
        {
            id: 'juquia',
            type: 'Polo de Atendimento',
            city: 'Juquiá (SP)',
            desc: 'Suporte jurídico e institucional estratégico no Vale do Ribeira.',
            address: 'Rua Major Martins Coelho, 438',
            cep: '11950-000',
            hours: 'Seg. a Sex. das 09h às 18h',
            image: sedeJuquia,
            mapUrl: juquiaMapUrl
        }
    ];

    return (
        <section id="offices" className="py-24 lg:py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="text-center mb-16 lg:mb-20">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-extrabold text-[0.7rem] uppercase tracking-widest rounded mb-6">
                        Presença Regional
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Nossas Sedes</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        A 205ª Subseção Miracatu conta com sua estrutura principal e o suporte fundamental do Polo Juquiá.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {offices.map((office) => (
                        <div key={office.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xl transition-all duration-300 hover:translate-y-[-8px] hover:border-primary/30 group">
                            <div className="h-[300px] overflow-hidden relative">
                                <img
                                    src={office.image}
                                    alt={office.city}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded text-[0.7rem] font-bold uppercase tracking-widest">
                                        {office.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 lg:p-10">
                                <h3 className="text-3xl font-bold text-navy mb-4 font-serif">{office.city}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed">{office.desc}</p>

                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-start gap-3 text-navy">
                                        <span className="text-primary font-bold min-w-[80px]">Endereço:</span>
                                        <span className="opacity-90">{office.address}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-navy">
                                        <span className="text-primary font-bold min-w-[80px]">CEP:</span>
                                        <span className="opacity-90">{office.cep}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-navy">
                                        <span className="text-primary font-bold min-w-[80px]">Horário:</span>
                                        <span className="opacity-90">{office.hours}</span>
                                    </li>
                                </ul>

                                <div className="h-[200px] rounded-xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <iframe
                                        src={office.mapUrl}
                                        width="100%" height="100%"
                                        style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Mapa ${office.city}`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficesSection;
