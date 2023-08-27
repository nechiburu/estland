import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 

const Login = ({ togglePopup, switchToSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // Usando directamente los nombres de los elementos para obtener sus valores
        const userEmail = e.target.elements.email.value;
        const userPassword = e.target.elements.password.value;
      
        try {
          const response = await axios.post('http://localhost:2000/api/login', {
            email: userEmail,
            password: userPassword,
          });
      
          if (response.data.token) {
            localStorage.setItem('token', response.data.token); // Guardamos el token en local storage
            togglePopup(); // Cerrar el modal de inicio de sesión
            window.location.href = "https://www.travelerocolleges.com";
          }
        } catch (error) {
          console.error("Error during login:", error.response.data.msg);
          // Aquí puedes mostrar un mensaje de error para informar al usuario
        }
    };

    return (
        <div className="login-container">
            <button className="close-btn" onClick={togglePopup}>&times;</button>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="input-group">
                    <input
                        name="email"
                        type="text"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Ingresar</button>
            </form>
            <p className="signup-prompt">
                ¿No tienes una cuenta? 
                <span onClick={switchToSignUp} className="signup-link">
                    Registrarse
                </span>
            </p>
        </div>
    );
};

export default Login;
