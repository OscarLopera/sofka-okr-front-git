import React from 'react';
import { Link } from "react-router-dom"
import Navbar from '../../components/structure/Navbar'
import Sidebar from '../../components/structure/Sidebar'
import { v4 as uuidv4 } from 'uuid';
import '../../assets/styles/calendar/OKR.scss'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { getFromLocal } from '../../functions/localStorage';
import swal from 'sweetalert2';

function CrearKr() {
    const idOkr = getFromLocal('idokr');

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const kr = {
            "id": uuidv4(),
            "okrId": idOkr,
            "keyResult": data.keyResult,
            "personInChargeNameKr": data.personInChargeNameKr,
            "personInChargeEmailKr": data.personInChargeEmailKr,
            "startDate": data.startDate,
            "finishDate": data.finishDate,
            "advanceKr": data.advanceKr,
            "percentageWeight": data.percentageWeight,
            "descriptionKr": data.descriptionKr
        }
        axios.post("https://tranquil-island-91872.herokuapp.com/Krs/postKr", kr)
            .then(res => {
                if (res.status === 201) {
                    swal.fire({
                        title: "¡Se guardó el Kr con éxito!",
                        icon: "success",
                        confirmButtonText: "¡Entendido!",
                        confirmButtonColor: "#ff7e06",
                    }).then(result => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    })
                }
            }
            );

    }


    return (
        <div className="container-okrs-form">
            <Navbar />
            <Sidebar />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Ingresar resultado clave</h2>
                <div>
                    <div>
                        <h5>Titulo</h5>
                        <input required {...register("keyResult")} type="text" />
                    </div>
                    <div>
                        <h5>Nombre del responsable</h5>
                        <input required {...register("personInChargeNameKr")} type="text" />
                    </div>
                    <div>
                        <h5>Correo del responsable</h5>
                        <input required {...register("personInChargeEmailKr")} type="email" />
                    </div>
                </div>
                <div>
                    <div>
                        <h5>Fecha de inicio</h5>
                        <input required {...register("startDate")} type="date" />
                    </div>
                    <div>
                        <h5>Fecha final</h5>
                        <input required {...register("finishDate")} type="date" />
                    </div>
                    <div>
                        <h5>Avance</h5>
                        <input required {...register("advanceKr")} type="number" />
                    </div>
                    <div>
                        <h5>Valor en el OKR</h5>
                        <input required {...register("percentageWeight")} type="number" />
                    </div>
                </div>
                <div>
                    <h5>Descripcion</h5>
                    <textarea maxlength="250" required {...register("descriptionKr")} cols="20" rows="3"></textarea>
                </div>
                <button type="submit">Guardar</button>
            </form>

        </div>
    )
}

export default CrearKr
