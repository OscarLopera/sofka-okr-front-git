import React from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../../assets/styles/planification/Planification.scss'
import { saveToLocal } from '../../functions/localStorage'
import { environment } from '../../environment/backendurl'
import Navbar from '../../components/structure/Navbar'
import Sidebar from '../../components/structure/Sidebar'
import { auth } from '../../functions/firebaseAuth'

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
		<>
			<Navbar />
			<Sidebar />
			<section className="containerOkrCreate">
				<div className="title">
					<h3>Crear Objetivo</h3>
				</div>

				<div className="fieldOkrCreate">
					<form className="row" onSubmit={handleSubmit(onSubmit)}>
						<div className="col">
							<div className="fieldCol">
								<label htmlFor="titleOKR">Titulo</label>
								<input {...register('title')} type="text" id="planificationTitleOKR" required />
							</div>

							<div className="fieldCol">
								<label htmlFor="objectiveOKR">Objetivo</label>
								<input {...register('objective')} type="text" id="planificationObjectiveOKR" required />
							</div>

							<div className="fieldColRespomsable">
								<div>
									<p>Responsable</p>
								</div>

								<div className="fieldColRes">
									<label htmlFor="nameOKR">Nombre</label>
									<input {...register('responsible')} type="text" id="planificationNameOKR" required />
								</div>

								<div className="fieldColRes">
									<label htmlFor="emailOKR">Correo</label>
									<input {...register('mail')} type="text" id="planificationEmailOKR" required />
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
									id="planificationDescription"
									cols="30"
									rows="10"
								></textarea>
							</div>
						</div>
						<div className="containerButtons">
							<Link to="/myokrs">
								<button id="planificationbuttonCancel">Cancelar</button>
							</Link>
							<button type="submit" id="planificationbuttonNext">Siguiente</button>
						</div>
					</form>
				</div>
			</section>
		</>
	)
}

export default OkrCreate
