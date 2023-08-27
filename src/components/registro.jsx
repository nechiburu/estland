// SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ togglePopup, switchToLogin }) => {
    const [nombre, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async (e) => {
        console.log("handleSignUp is triggered");
        e.preventDefault();
        const { nombre, email, password, confirmPassword } = e.target.elements;

        if (password.value !== confirmPassword.value) {
            console.error("Las contraseñas no coinciden");
            // Puedes mostrar un mensaje al usuario aquí
            return;
        }

        try {
            console.log("Intentando enviar solicitud a Axios...");
            const response = await axios.post('http://localhost:2000/api/registrar', {
                nombre: nombre.value,
                email: email.value,
                password: password.value,
            });
        
            console.log("Respuesta recibida:", response);
            console.log(response.data.msg);
        } catch (error) {
            console.error("Se capturó un error durante el registro:", error);
            if (error.response) {
                console.error("Error en la respuesta del servidor:", error.response.data.msg);
            }
        }
        
    };

    return (
        <div className="form-container">
            <button className="close-btn" onClick={togglePopup}>&times;</button>
            <h2>Registrarse</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Registrarse</button>
            </form>
            <p>
                ¿Ya tienes una cuenta? 
                <span
                    onClick={switchToLogin}
                    className="switch">
                    Iniciar sesión
                </span>
            </p>
        </div>
    );
};

export default SignUp;