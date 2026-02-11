import React from 'react';

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
        <div className="mt-10">
            <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl">📸</span>
                <div className="leading-tight">
                    <h4 className="text-white font-bold text-base">@oabmiracatu</h4>
                    <p className="text-white/40 text-[0.7rem] uppercase tracking-widest font-bold">Siga-nos no Instagram</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3">
                {posts.map(post => (
                    <div
                        key={post.id}
                        className="aspect-square bg-cover bg-center rounded-lg cursor-pointer relative overflow-hidden group border border-white/5"
                        style={{ backgroundImage: `url(${post.url})` }}
                    >
                        <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                            <span className="text-white font-black text-xs">❤️ 42</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instafeed;
