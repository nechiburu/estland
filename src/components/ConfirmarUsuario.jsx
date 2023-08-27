import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SignUp.css'; 

const ConfirmarUsuario = () => {
    const { token } = useParams();

    useEffect(() => {
        // Llama al backend para confirmar al usuario
        axios.get(`http://localhost:2000/api/confirmar/${token}`)
            .then(response => {
                // Maneja la respuesta, por ejemplo mostrar un mensaje
                alert('Usuario confirmado exitosamente');
                // Redirecciona al usuario a localhost:3000
                window.location.href = "http://localhost:3000";
            })
            .catch(error => {
                // Maneja el error
                alert('Hubo un error al confirmar al usuario');
            });
    }, [token]); // Agrega token como dependencia para evitar advertencias

    return (
        <div>
            {/* Puedes mostrar un spinner o un mensaje mientras esperas la respuesta */}
            Confirmando usuario...
        </div>
    );
}

export default ConfirmarUsuario;