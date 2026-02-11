import React from 'react';
import '../styles/Instafeed.css';

const Instafeed = () => {
    // Mock data for the Instagram feed
    const posts = [
        { id: 1, url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop' },
        { id: 2, url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop' },
        { id: 3, url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop' },
        { id: 4, url: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2070&auto=format&fit=crop' },
        { id: 5, url: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=2070&auto=format&fit=crop' },
        { id: 6, url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop' },
    ];

    return (
        <div className="instafeed-widget">
            <div className="insta-header">
                <span className="insta-icon">📸</span>
                <div className="insta-info">
                    <h4>@oabmiracatu</h4>
                    <p>Siga-nos no Instagram</p>
                </div>
            </div>
            <div className="insta-grid">
                {posts.map(post => (
                    <div key={post.id} className="insta-post" style={{ backgroundImage: `url(${post.url})` }}>
                        <div className="insta-overlay">
                            <span>❤️ 42</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instafeed;
