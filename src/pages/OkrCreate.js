import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../assets/styles/planification/Planification.scss'

import { environment } from '../environment/backendurl'

const OkrCreate = () => {
	const onSubmit = (data) => {
		console.log(data)
		console.log(environment)
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
								<option value="Desarrollo">Option 1</option>
								<option value="Calidad">Option 2</option>
								<option value="3">Option 3</option>
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
