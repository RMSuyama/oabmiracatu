import React, { useState, useEffect } from 'react';
import '../styles/EventsPanel.css';

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
        <section id="events" className="events-panel">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Fique por Dentro</span>
                    <h2>Eventos da Classe</h2>
                </div>

                <div className="events-grid">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <div className="event-image">
                                {event.image && <img src={event.image} alt={event.title} />}
                            </div>
                            <div className="event-card-content">
                                <div className="event-date">
                                    <span className="day">{event.date.split(' ')[0]}</span>
                                    <span className="month">{event.date.split(' ')[1]}</span>
                                </div>
                                <div className="event-details">
                                    <span className="event-category">{event.category}</span>
                                    <h3>{event.title}</h3>
                                    <p className="event-location">📍 {event.location}</p>
                                    <a href={event.link || '#'} target="_blank" rel="noopener noreferrer" className="event-link">Inscrever-se →</a>
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
