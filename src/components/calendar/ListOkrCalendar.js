import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { environment } from '../../environment/backendurl';
import { saveToLocal } from '../../functions/localStorage';
import { auth } from '../../functions/firebaseAuth';

const ListOkrCalendar = () => {
    const user = auth.currentUser? auth.currentUser.uid: "";
    const URL = environment.api;
    const [okrs, setOkrs] = useState([]);
    const getOkrsUser = () => {
        axios.get(`${URL}/dashboard/user-okrs/${user}`)
            .then(res => {
                if (res.status === 200) {
                    setOkrs(res.data);
                }
            })
    }

    useEffect(() => {
        getOkrsUser();
    }, [])
    return (
        <div id="container-select-title-calendar-home" className="container-select-title-calendar-home">
            <h4 id="select-title-calendar-home" data-testid="select-title-calendar-home">Elige el OKR:</h4>
            <select onChange={
                e => {
                    e.preventDefault();
                    saveToLocal('OKR-CALENDAR', e.target.value);
                }
            } name="select" id="select-calendar-home">
                <option data-testid="option-title-calendar-home" defaultValue="default">OKR's</option>
                {okrs && okrs.map(item => (
                    <option key={item.id} value={item.title}>{item.title}</option>
                ))}
            </select>
        </div>
    );
}

export default ListOkrCalendar;