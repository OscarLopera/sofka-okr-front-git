import React from 'react';
import '../../assets/styles/planification/Planification.scss';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios';
import { environment } from '../../environment/backendurl';
import { getFromLocal } from '../../functions/localStorage'
import Navbar from '../../components/structure/Navbar'
import Sidebar from '../../components/structure/Sidebar'

const KrCreate = (props) => {
	const idOkr = getFromLocal('idOkr')
	const history = useHistory()
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
					history.push('/myokrs')
				}
			})
	}

	const { register, handleSubmit } = useForm()

	return (
		<>
			<Navbar />
			<Sidebar />
			<section className="containerOkrCreate">
				<div className="title">
					<h3>Crear KR</h3>
				</div>

				<div className="fieldOkrCreate">
					<form className="row" onSubmit={handleSubmit(onSubmit)}>
						<div className="col">
							<div className="fieldCol">
								<label htmlFor="kr">KR</label>
								<input {...register('keyResult')} type="text" id="planificationKr" required />
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
										id="planificationNameOKR"
										required
									/>
								</div>

								<div className="fieldColRes">
									<label htmlFor="emailOKR">Correo</label>
									<input
										{...register('personInChargeEmailKr')}
										type="text"
										id="planificationEmailOKR"
										required
									/>
								</div>
							</div>

							<div className="fieldCol">
								<label htmlFor="description">Descripción</label>
								<textarea
									required
									{...register('descriptionKr')}
									id="planificationDescription"
									cols="30"
									rows="10"
								></textarea>
							</div>
						</div>

						<div className="col">
							<div className="fieldCol">
								<label htmlFor="dateStart">Fecha Inicio</label>
								<input {...register('startDate')} type="date" id="planificationDateStart" />
							</div>
							<div className="fieldCol">
								<label htmlFor="dateFinish">Fecha final</label>
								<input {...register('finishDate')} type="date" id="planificationDateFinish" />
							</div>
							<div className="fieldCol">
								<label htmlFor="weight">Peso Porcentual</label>
								<input
									{...register('percentageWeight')}
									type="number"
									id="planificationWeight"
									min="1"
									max="100"
								/>
							</div>
						</div>
						<div className="containerButtons">
							<Link to="/okrCreate">
								<button>Anterior</button>
							</Link>
							<Link to="/myokrs">
								<button>Finalizar</button>
							</Link>
							<button onClick={() => window.location.reload()}>Agregar más Krs</button>
						</div>
					</form>
				</div>
			</section>
		</>
	)
}

export default KrCreate
