import React from 'react';

const ListOkrCalendar = () => {
    return (
        <div id="container-select-title-calendar-home" className="container-select-title-calendar-home">
            <h4 id="select-title-calendar-home" data-testid="select-title-calendar-home">Elige el OKR:</h4>
            <select name="select" id="select-calendar-home">
                <option data-testid="option-title-calendar-home" defaultValue="default">OKR's</option>
                <option value="value1">Tener un físico sano y estable</option>
                <option value="value2">Aumentar el número de empleados</option>
                <option value="value3">Crear un proyecto de OKR's</option>
            </select>
        </div>
    );
}

export default ListOkrCalendar;