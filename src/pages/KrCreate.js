import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import '../assets/styles/planification/Planification.scss'
import { environment } from '../environment/backendurl'
import { v4 as uuidv4 } from 'uuid'
import { saveToLocal, getFromLocal } from '../functions/localStorage'

const KrCreate = (props) => {
	const idOkr = getFromLocal('idOkr')
	const urlKr = environment.apiKrUrl

	const onSubmit = (data) => {
		axios
			.post(`${urlKr}/postKr`, {
				id: uuidv4(),
				okrId: idOkr,
				keyResult: data.keyResult,
				personInChargeNameKr: data.personInChargeNameKr,
				personInChargeEmailKr: data.personInChargeEmailKr,
				startDate: data.startDate,
				finishDate: data.finishDate,
				advanceKr: 0,
				percentageWeight: data.percentageWeight,
				descriptionKr: data.descriptionKr,
			})
			.then((res) => {
				if (res.status === 201) {
					window.location.href = '/okrs'
				}
			})
	}

	const { register, handleSubmit } = useForm()

	return (
		<section className="containerOkrCreate">
			<div className="title">
				<h3>Crear KR</h3>
			</div>

			<div className="fieldOkrCreate">
				<form className="row" onSubmit={handleSubmit(onSubmit)}>
					<div className="col">
						<div className="fieldCol">
							<label htmlFor="kr">KR</label>
							<input {...register('keyResult')} type="text" id="kr" required />
						</div>

						<div className="fieldColRespomsable">
							<div>
								<p>Responsable</p>
							</div>

							<div className="fieldColRes">
								<label htmlFor="nameOKR">Nombre</label>
								<input
									{...register('personInChargeNameKr')}
									type="text"
									id="nameOKR"
									required
								/>
							</div>

							<div className="fieldColRes">
								<label htmlFor="emailOKR">Correo</label>
								<input
									{...register('personInChargeEmailKr')}
									type="text"
									id="emailOKR"
									required
								/>
							</div>
						</div>

						<div className="fieldCol">
							<label htmlFor="description">Descripción</label>
							<textarea
								required
								{...register('descriptionKr')}
								id="description"
								cols="30"
								rows="10"
							></textarea>
						</div>
					</div>

					<div className="col">
						<div className="fieldCol">
							<label htmlFor="dateStart">Fecha Inicio</label>
							<input {...register('startDate')} type="date" id="dateStart" />
						</div>
						<div className="fieldCol">
							<label htmlFor="dateFinish">Fecha final</label>
							<input {...register('finishDate')} type="date" id="dateFinish" />
						</div>
						<div className="fieldCol">
							<label htmlFor="weight">Peso Porcentual</label>
							<input
								{...register('percentageWeight')}
								type="number"
								id="weight"
								min="1"
								max="100"
							/>
						</div>
					</div>
					<div className="containerButtons">
						<Link to="/okrCreate">
							<button>Anterior</button>
						</Link>
						<button type="submit">Finalizar</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default KrCreate
