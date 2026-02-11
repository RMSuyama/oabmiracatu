import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded credentials for demonstration
        if (username === 'admin' && password === 'oab205') {
            localStorage.setItem('oab_auth', 'true');
            navigate('/admin-eventos');
        } else {
            setError('Usuário ou senha incorretos.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-box">
                    <header className="login-header">
                        <h2>Acesso Restrito</h2>
                        <p>Painel Administrativo OAB Miracatu</p>
                    </header>
                    <form onSubmit={handleLogin} className="login-form">
                        {error && <div className="login-error">{error}</div>}
                        <div className="form-group">
                            <label>Usuário</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Seu usuário"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Senha</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Sua senha"
                                required
                            />
                        </div>
                        <button type="submit" className="login-btn">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
