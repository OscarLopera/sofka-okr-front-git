import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { environment } from '../environment/backendurl'
import { Link } from 'react-router-dom'
import '../assets/styles/planification/Planification.scss'

const Okrs = () => {

	const [okr, setOkr] = useState([])

	const urlOkr = environment.apiOkrUrl

	const getAll = () => {
		axios.get(urlOkr)
			.then(res => {
				console.log(res)
				setOkr(res.data)
			})
	}

	useEffect(() => { getAll() }, [])


	return (
		<section className="okr">
			<div className="containerOKR">
				<div className="title">
					<h3>Mis OKR's</h3>
					<Link to="/okrCreate">
						<span>
							<i class="fas fa-plus-circle"></i>
						</span>
					</Link>
				</div>

				<div className="okr-item">
					<div className="headerOKR">
						<div className="titleOKR">
							<h3>Title OKR</h3>
							<div className="icons">
								<i className="fas fa-trash-alt"></i>
								<i className="fas fa-edit"></i>
							</div>
						</div>
					</div>

					<div className="contentOKR">
						<div className="kr">
							<div className="headerKR">
								<h3>Title KR</h3>
								<div className="icons">
									<i className="fas fa-trash-alt"></i>
									<i className="fas fa-edit"></i>
								</div>
							</div>
							<div className="contentKR">
								<p style={{ width: '80%' }} data-value="80">
									avance
								</p>
								<progress max="100" value="80">
									<div class="progress-bar">
										<span style={{ width: '80%' }}>80%</span>
									</div>
								</progress>

								<div className="update">
									<input type="number" name="updateRange" id="updateRange" min="1" max="100" />
									<button>Actualizar</button>
								</div>
							</div>
						</div>

						<div className="kr">
							<div className="headerKR">
								<h3>Title KR</h3>
								<div className="icons">
									<i className="fas fa-trash-alt"></i>
									<i className="fas fa-edit"></i>
								</div>
							</div>
							<div className="contentKR">
								<p style={{ width: '80%' }} data-value="80">
									avance
								</p>
								<progress max="100" value="80">
									<div class="progress-bar">
										<span style={{ width: '80%' }}>80%</span>
									</div>
								</progress>

								<div className="update">
									<input type="number" name="updateRange" id="updateRange" min="1" max="100" />
									<button>Actualizar</button>
								</div>
							</div>
						</div>

						<div className="kr">
							<div className="headerKR">
								<h3>Title KR</h3>
								<div className="icons">
									<i className="fas fa-trash-alt"></i>
									<i className="fas fa-edit"></i>
								</div>
							</div>
							<div className="contentKR">
								<p style={{ width: '80%' }} data-value="80">
									avance
								</p>
								<progress max="100" value="80">
									<div class="progress-bar">
										<span style={{ width: '80%' }}>80%</span>
									</div>
								</progress>

								<div className="update">
									<input type="number" name="updateRange" id="updateRange" min="1" max="100" />
									<button>Actualizar</button>
								</div>
							</div>
						</div>

						<div className="kr">
							<div className="headerKR">
								<h3>Title KR</h3>
								<div className="icons">
									<i className="fas fa-trash-alt"></i>
									<i className="fas fa-edit"></i>
								</div>
							</div>
							<div className="contentKR">
								<p style={{ width: '80%' }} data-value="80">
									avance
								</p>
								<progress max="100" value="80">
									<div class="progress-bar">
										<span style={{ width: '80%' }}>80%</span>
									</div>
								</progress>

								<div className="update">
									<input type="number" name="updateRange" id="updateRange" min="1" max="100" />
									<button>Actualizar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Okrs
