import React, { useState } from 'react';
import Navbar from '../../components/structure/Navbar'
import Sidebar from '../../components/structure/Sidebar'
import { v4 as uuidv4 } from 'uuid';
import '../../assets/styles/calendar/OKR.scss'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { auth } from '../../functions/firebaseAuth';
import { saveToLocal } from '../../functions/localStorage';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert2';

function CrearOKR() {
    const [vertical, setVertical] = useState("");
    const [idUser, setIdUser] = useState(auth.currentUser.uid ? auth.currentUser.uid : "");
    const history = useHistory()

    const saveId = (id) => {
        saveToLocal('idokr', id);
        return id;
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const okr = {
            "id": saveId(uuidv4()),
            "title": data.title,
            "objective": data.objective,
            "personInChargeNameOkr": data.personInChargeNameOkr,
            "personInChargeEmailOkr": data.personInChargeEmailOkr,
            "userId": idUser,
            "descriptionOkr": data.descriptionOkr,
            "vertical": vertical,
            "Date startDate": "30-04-2021",
            "advanceOkr": "0",
            "historicalOkr": [{
                "id": null,
                "dateUpdate": null,
                "newAdvance": null
            }]
        }
        axios.post('https://tranquil-island-91872.herokuapp.com/Okrs/postOkr', okr).then(res => {
            console.log(res);
            if (res.status === 201) {
                swal.fire({
                    title: "¡Se guardó el Okr con éxito!",
                    icon: "success",
                    confirmButtonText: "¡Entendido!",
                    confirmButtonColor: "#ff7e06",
                }).then(result => {
                    if (result.isConfirmed) {
                        history.push('/krCreate')
                    }
                })
            }
        })
    }
    return (
        <div className="container-okrs-form">
            <Navbar />
            <Sidebar />
            <div>
                <h1>Crear objetivo</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-input">
                        <div>
                            <h5>Título</h5>
                            <input required {...register("title")} type="text" />
                        </div>
                        <div>
                            <h5>Objetivo</h5>
                            <input required {...register("objective")} type="text" />
                        </div>
                    </div>

                    <div>
                        <h3>Responsable</h3>
                        <div>
                            <h5>Nombre</h5>
                            <input required {...register("personInChargeNameOkr")} type="text" />
                        </div>
                        <div>
                            <h5>Correo</h5>
                            <input required {...register("personInChargeEmailOkr")} type="email" />
                        </div>
                    </div>
                    <div className="select-form-okr">
                        <select required onChange={e => {
                            e.preventDefault();
                            setVertical(e.target.value)
                        }} name="select" id="select-calendar-home">
                            <option defaultValue="default">Verticales</option>
                            <option value="Sofka Testing">Sofka Testing</option>
                            <option value="Agile Services">Agile Services</option>
                            <option value="Arquitecture and Development">Arquitecture and Development</option>
                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                        </select>
                    </div>
                    <div>
                        <h3>Descripción</h3>
                        <br />
                        <textarea required {...register("descriptionOkr")} cols="20" rows="3">
                        </textarea>
                    </div>
                    <button type="submit">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default CrearOKR
