import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/planification/Planification.scss'

const KrCreate = () => {
	return (
		<section className="containerOkrCreate">
			<div className="title">
				<h3>Crear KR</h3>
			</div>

			<div className="fieldOkrCreate">
				<form className="row">
					<div className="col">
						<div className="fieldCol">
							<label htmlFor="kr">KR</label>
							<input type="text" name="kr" id="kr" required />
						</div>

						<div className="fieldColRespomsable">
							<div>
								<p>Responsable</p>
							</div>

							<div className="fieldColRes">
								<label htmlFor="nameOKR">Nombre</label>
								<input type="text" name="nameOKR" id="nameOKR" required />
							</div>

							<div className="fieldColRes">
								<label htmlFor="emailOKR">Correo</label>
								<input type="text" name="emailOKR" id="emailOKR" required />
							</div>
						</div>

						<div className="fieldCol">
							<label htmlFor="description">Descripción</label>
							<textarea
								name="description"
								required
								id="description"
								cols="30"
								rows="10"
							></textarea>
						</div>
					</div>

					<div className="col">
						<div className="fieldCol">
							<label htmlFor="dateStart">Fecha Inicio</label>
							<input type="date" name="dateStart" id="dateStart" />
						</div>
						<div className="fieldCol">
							<label htmlFor="dateFinish">Fecha final</label>
							<input type="date" name="dateFinish" id="dateFinish" />
						</div>
						<div className="fieldCol">
							<label htmlFor="weight">Peso Porcentual</label>
							<input type="number" name="weight" id="weight" min="1" max="100" />
						</div>
					</div>
				</form>
			</div>

			<div className="containerButtons">
				<Link to="/okrCreate">
					<button>Anterior</button>
				</Link>
				<Link to="/okrs">
					<button>Finalizar</button>
				</Link>
				<Link to="/krCreate">
					<button>Agregar más KR</button>
				</Link>
			</div>
		</section>
	)
}

export default KrCreate
