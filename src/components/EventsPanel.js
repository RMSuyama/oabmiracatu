import React, { useState, useEffect } from 'react';

const EventsPanel = () => {
    const [events, setEvents] = useState([
        {
            date: '15 MAR',
            title: 'I Seminário de Direito Civil do Vale',
            category: 'Jurídico',
            location: 'Auditório Juquiá'
        },
        {
            date: '22 MAR',
            title: 'Churrasco de Integração da Classe',
            category: 'Social',
            location: 'Sede Miracatu'
        },
        {
            date: '05 ABR',
            title: 'Workshop: Marketing Jurídico Digital',
            category: 'Carreira',
            location: 'Online / Teams'
        }
    ]);

    useEffect(() => {
        const savedEvents = localStorage.getItem('oab_events');
        if (savedEvents) {
            setEvents(JSON.parse(savedEvents));
        }
    }, []);

    return (
        <section id="events" className="py-24 lg:py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="mb-12 lg:mb-16">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-extrabold text-[0.7rem] uppercase tracking-widest rounded mb-4">
                        Fique por Dentro
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy">Eventos da Classe</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl hover:border-primary/30 group">
                            <div className="h-48 bg-slate-100 overflow-hidden relative">
                                {event.image ? (
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-navy/5 text-navy/20 text-4xl font-bold">
                                        OAB EVENTOS
                                    </div>
                                )}
                                <div className="absolute top-4 right-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider shadow-sm">
                                        {event.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex gap-5">
                                <div className="flex flex-col items-center justify-center bg-navy text-white min-w-[70px] h-[70px] rounded-lg shadow-md group-hover:bg-primary transition-colors duration-300">
                                    <span className="text-2xl font-black leading-none">{event.date.split(' ')[0]}</span>
                                    <span className="text-[0.65rem] uppercase font-bold tracking-tighter opacity-80">{event.date.split(' ')[1]}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-navy leading-tight mb-3 group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-4 flex items-center gap-2">
                                        <span>📍</span> {event.location}
                                    </p>
                                    <a
                                        href={event.link || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[0.7rem] font-black text-navy uppercase tracking-widest hover:text-primary transition-all flex items-center gap-2"
                                    >
                                        Inscrever-se <span className="text-base">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsPanel;
