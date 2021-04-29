import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { environment } from '../environment/backendurl'
import OkrFinish from '../components/notifications/okrfinish/OkrFinish';
import KrFinish from '../components/notifications/krfinish/KrFinish'
import '../assets/styles/planification/Planification.scss';


const Okrs = () => {
	const [okr, setOkr] = useState([])

	const urlOkr = environment.apiOkrUrl

	const getAllOkr = () => {
		axios.get(urlOkr).then((res) => {
			setOkr(res.data)
		})
	}

	useEffect(() => {
		getAllOkr()
	}, [])

	return (
		<section className="okr">

		<OkrFinish/>
		<KrFinish/>
		<div>
		<button>Aceptar Notificación</button>
		</div>
		<button>confirmar eliminación</button>

			<div className="containerOKR">
				<div className="title">
					<h3>Mis OKR's</h3>
					<Link to="/okrCreate">
						<span>
							<i class="fas fa-plus-circle"></i>
						</span>
					</Link>
				</div>

				{okr &&
					okr.map((item) => (
						<div className="okr-item">
							<div className="headerOKR">
								<div className="titleOKR">
									<h3>{item.title}</h3>
									<div className="icons">
										<i className="fas fa-trash-alt"></i>
										<i className="fas fa-edit"></i>
									</div>
								</div>
							</div>

                            <div className="contentOKR">

                            </div>
						</div>
					))}
			</div>
		</section>
	)
}

export default Okrs
