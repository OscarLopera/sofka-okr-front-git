import React from 'react';

export function newFunction(setModalIsOpen) {
    return <button onClick={() => setModalIsOpen(true)}>Crear un Usuario</button>;
}
