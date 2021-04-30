import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { environment } from '../../environment/backendurl';
import swal from 'sweetalert2';

function ContentScheduleCalendar() {
    const { register, handleSubmit } = useForm();
    const URL = environment.api;

    const onSubmit = data => {
        const event = {
            title:data.title,
            description: data.description,
            location: "Medellin, Colombia",
            date: data.date,
            startTime: `${data.startTime}:00`,
            endTime: `${data.endTime}:00`,
            emails: [data.email]
        }

        axios.post(`${URL}/calendar/save`, event).then(res=>{
            if(res.status===200){
                swal.fire({
                    title: "Se guardó el evento con éxito",
                    icon: "success",
                    confirmButtonText: "¡Entendido!",
                    confirmButtonColor: "#ff7e06",
                  }).then(result=>{
                      if(result.isConfirmed){
                          window.location.reload();
                      }
                  })
            }
        })
        
    }
    return (
        <div id="container-content-calendar-home" className="container-content-calendar-scheduler">
            <form className="form-scheduler-calendar" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <h5>Título</h5>
                        <input required {...register("title")} type="text" />
                    </div>
                    <div>
                        <h5>Asistente</h5>
                        <input required {...register("email")} type="text" />
                    </div>
                    <div>
                        <h5>Descripción</h5>
                        <textarea required {...register("description")} id="" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>Fecha del evento</h5>
                        <input required {...register("date")} type="date" />
                    </div>
                    <div>
                        <h5>Hora de inicio</h5>
                        <input required {...register("startTime")} type="time" />
                    </div>
                    <div>
                        <h5>Hora final</h5>
                        <input required {...register("endTime")} type="time" />
                    </div>
                    <button data-testid="btn-submit-form-create-event" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default ContentScheduleCalendar;
