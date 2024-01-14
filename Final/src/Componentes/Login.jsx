// Login.jsx
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación (simplificada)
    if (username === 'Messi' && password === '12345') {
      onLogin(username);
    } else {
      setError('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div>
      {onLogin ? (
        <div>
          <p>Bienvenido, {username}!</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <div>
            <label>Usuario:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Iniciar sesión</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
