import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { auth } from '../../functions/firebaseAuth'
import { environment } from '../../environment/backendurl'
import Navbar from '../../components/structure/Navbar'
import Sidebar from '../../components/structure/Sidebar'
import Kr from '../../components/planification/Kr';
import '../../assets/styles/planification/Planification.scss'
import DeleteOkr from '../../components/notifications/notificationsAlerts/DeleteOkr'
import EmptyOkrs from '../../components/planification/emptyOkrs'

const Okrs = () => {

	const userId = auth.currentUser ? auth.currentUser.uid : ''
	const [okr, setOkr] = useState([])

	const urlOkr = environment.apiOkrUrl

	const getAllOkr = () => {
		axios.get(`${urlOkr}/${userId}`).then((res) => {
			console.log(res.data)
			setOkr(res.data)
		})
	}


	useEffect(() => {
		getAllOkr();
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<Navbar />
			<Sidebar />
			<section className="okr">
				<div className="containerOKR">
					<div className="title">
						<h3>Mis OKR's</h3>
					</div>
					{okr.length === 0 &&
						<EmptyOkrs></EmptyOkrs>}

					{okr &&
						okr.map((item) => (
							<div className="okr-item">
								<div className="headerOKR">
									<div className="titleOKR">
										<h3>{item.title}</h3>
										<div className="icons">
											<i className="fas fa-trash-alt" onClick={() => DeleteOkr(item.id)}></i>
											<i className="fas fa-edit"></i>
										</div>
									</div>
								</div>
								<div className="contentOKR">
									<div>
										<Kr okrId={item.id} />
									</div>
								</div>
							</div>
						))}
				</div>
			</section>
		</>
	)
}

export default Okrs
