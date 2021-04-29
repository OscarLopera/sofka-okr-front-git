import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../assets/styles/planification/Planification.scss'
import { saveToLocal } from '../functions/localStorage'

import { environment } from '../environment/backendurl'
import { v4 as uuidv4 } from 'uuid'

import { auth } from '../functions/firebaseAuth'

const OkrCreate = () => {
	const userId = auth.currentUser.uid
	const urlOkr = environment.apiOkrUrl
	const idOkr = uuidv4()

	const onSubmit = (data) => {
		axios
			.post(`${urlOkr}/postOkr`, {
				id: idOkr,
				title: data.title,
				personInChargeNameOkr: auth.currentUser.displayName,
				personInChargeEmailOkr: auth.currentUser.email,
				userId: userId,
				descriptionOkr: data.descriptionOkr,
				vertical: data.vertical,
			})
			.then((res) => {
				if (res.status === 201) {
					saveToLocal('idOkr', idOkr)
					window.location.href = '/krCreate'
				}
				console.log(res.status)
			})
	}

	const { register, handleSubmit } = useForm()

	return (
		<section className="containerOkrCreate">
			<div className="title">
				<h3>Crear Objetivo</h3>
			</div>

			<div className="fieldOkrCreate">
				<form className="row" onSubmit={handleSubmit(onSubmit)}>
					<div className="col">
						<div className="fieldCol">
							<label htmlFor="titleOKR">Titulo</label>
							<input {...register('title')} type="text" id="titleOKR" required />
						</div>

						<div className="fieldCol">
							<label htmlFor="objectiveOKR">Objetivo</label>
							<input {...register('objective')} type="text" id="objectiveOKR" required />
						</div>

						<div className="fieldColRespomsable">
							<div>
								<p>Responsable</p>
							</div>

							<div className="fieldColRes">
								<label htmlFor="nameOKR">Nombre</label>
								<input {...register('responsible')} type="text" id="nameOKR" required />
							</div>

							<div className="fieldColRes">
								<label htmlFor="emailOKR">Correo</label>
								<input {...register('mail')} type="text" id="emailOKR" required />
							</div>
						</div>
					</div>

					<div className="col">
						<div className="fieldCol">
							<label htmlFor="vertical">Verticales</label>
							<select {...register('vertical')} id="vertical" required>
								<option value="Sofka Testing">Sofka testing</option>
								<option value="Agile Services">Agile Services</option>
								<option value="Arquitectura y Desarrollo">Arquitectura y Desarrollo</option>
								<option value="Inteligencia Artifical">Inteligencia Artifical</option>
							</select>
						</div>

						<div className="fieldCol">
							<label htmlFor="description">Descripción</label>
							<textarea
								{...register('descriptionOkr')}
								required
								id="description"
								cols="30"
								rows="10"
							></textarea>
						</div>
					</div>
					<div className="containerButtons">
						<Link to="/okrs">
							<button>Cancelar</button>
						</Link>
						<button type="submit">Siguiente</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default OkrCreate
