import React, { useState, useEffect } from 'react';
import '../styles/EventsAdmin.css';

const EventsAdmin = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        date: '',
        title: '',
        category: 'Jurídico',
        location: ''
    });

    useEffect(() => {
        const savedEvents = localStorage.getItem('oab_events');
        if (savedEvents) {
            setEvents(JSON.parse(savedEvents));
        } else {
            // Initial mock data if empty
            const initialEvents = [
                { date: '15 MAR', title: 'I Seminário de Direito Civil do Vale', category: 'Jurídico', location: 'Auditório Juquiá' },
                { date: '22 MAR', title: 'Churrasco de Integração da Classe', category: 'Social', location: 'Sede Miracatu' },
                { date: '05 ABR', title: 'Workshop: Marketing Jurídico Digital', category: 'Carreira', location: 'Online / Teams' }
            ];
            setEvents(initialEvents);
            localStorage.setItem('oab_events', JSON.stringify(initialEvents));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    const addEvent = (e) => {
        e.preventDefault();
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        localStorage.setItem('oab_events', JSON.stringify(updatedEvents));
        setNewEvent({ date: '', title: '', category: 'Jurídico', location: '' });
    };

    const deleteEvent = (index) => {
        const updatedEvents = events.filter((_, i) => i !== index);
        setEvents(updatedEvents);
        localStorage.setItem('oab_events', JSON.stringify(updatedEvents));
    };

    return (
        <div className="admin-page container">
            <header className="admin-header">
                <h1>Painel de Gestão de Eventos</h1>
                <p>Adicione ou remova eventos que aparecem na página inicial.</p>
            </header>

            <div className="admin-grid">
                <section className="admin-form-section">
                    <h2>Novo Evento</h2>
                    <form onSubmit={addEvent} className="event-form">
                        <div className="form-group">
                            <label>Data (Ex: 15 MAR)</label>
                            <input
                                type="text"
                                name="date"
                                value={newEvent.date}
                                onChange={handleInputChange}
                                placeholder="DD MES"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Título do Evento</label>
                            <input
                                type="text"
                                name="title"
                                value={newEvent.title}
                                onChange={handleInputChange}
                                placeholder="Nome do evento"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Categoria</label>
                            <select name="category" value={newEvent.category} onChange={handleInputChange}>
                                <option value="Jurídico">Jurídico</option>
                                <option value="Social">Social</option>
                                <option value="Carreira">Carreira</option>
                                <option value="Esportivo">Esportivo</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Localização</label>
                            <input
                                type="text"
                                name="location"
                                value={newEvent.location}
                                onChange={handleInputChange}
                                placeholder="Ex: Sede Miracatu"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-add">Adicionar Evento</button>
                    </form>
                </section>

                <section className="admin-list-section">
                    <h2>Eventos Atuais</h2>
                    <div className="admin-events-list">
                        {events.map((event, index) => (
                            <div key={index} className="admin-event-item">
                                <div className="event-info">
                                    <span className="event-date-badge">{event.date}</span>
                                    <div>
                                        <h3>{event.title}</h3>
                                        <small>{event.category} | {event.location}</small>
                                    </div>
                                </div>
                                <button onClick={() => deleteEvent(index)} className="btn-delete">Excluir</button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EventsAdmin;
