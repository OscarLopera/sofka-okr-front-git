import React from 'react';

const ListOkrCalendar = () => {
    return (
        <div className="container-select-title-calendar">
            <h4>Elige el OKR:</h4>
            <select name="select">
                <option defaultValue="default">OKR's</option>
                <option value="value1">Tener un físico sano y estable</option>
                <option value="value2">Aumentar el número de empleados</option>
                <option value="value3">Crear un proyecto de OKR's</option>
            </select>
        </div>
    );
}

export default ListOkrCalendar;