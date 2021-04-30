import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { environment } from '../../environment/backendurl'
import DeleteKr from '../notifications/notificationsAlerts/DeleteKr'

const Kr = ({ okrId }) => {

	const [kr, setKr] = useState([])
	const urlKr = environment.apiKrUrl

	const getKrsById = (okrId) => {
		axios.get(`${urlKr}/${okrId}`).then((res) => {
			setKr(res.data)
		})
	}

	useEffect(() => {
		getKrsById(okrId);
		// eslint-disable-next-line
	}, [])

	return (
		<>
			{kr &&
				kr.map((item) => (
					<div className="kr">
						<div className="headerKR">
							<h3>{item.keyResult}</h3>
							<div className="icons">
								<i className="fas fa-trash-alt" onClick={() => DeleteKr(item.id)}></i>
							</div>
						</div>
						<div className="contentKR">
							<p style={{ width: item.advanceKr + '%' }} data-value={item.advanceKr}>
								avance
							</p>
							<progress max="100" value={item.advanceKr}>
								<div className="progress-bar">
									<span style={{ width: item.advanceKr + '%' }}> {item.advanceKr} %a </span>
								</div>
							</progress>
							<h3 style={{ "word-break": "break-word" }}>Descripción: {item.descriptionKr}</h3>
							<hr />
							<br />
							<h3>Responsable: {item.personInChargeNameKr}</h3>
							<h4>Fecha de inicio: {item.startDate}</h4>
							<h4>Fecha de finalización: {item.finishDate}</h4>
						</div>
					</div>
				))

			}
		</>
	)
}

export default Kr
