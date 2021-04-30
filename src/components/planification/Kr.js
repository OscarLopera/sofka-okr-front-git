import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { environment } from '../../environment/backendurl'

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


	console.log(kr)
	return (
		<>
			{kr &&
				kr.map((item) => (
					<div className="kr">
						<div className="headerKR">
							<h3>{item.keyResult}</h3>
							<div className="icons">
								<i className="fas fa-trash-alt"></i>
								<i className="fas fa-edit"></i>
							</div>
						</div>
						<div className="contentKR">
							<p style={{ width: item.advanceKr + '%' }} data-value={item.advanceKr}>
								avance
							</p>
							<progress max="100" value={item.advanceKr}>
								<div class="progress-bar">
									<span style={{ width: item.advanceKr + '%' }}> {item.advanceKr} %a </span>
								</div>
							</progress>

							<div className="update">
								<input type="number" name="updateRange" id="updateRange" min="1" max="100" placeholder="1 - 100" />
								<button id="buttonUpdateRange">Actualizar</button>
							</div>
						</div>
					</div>
				))

			}
		</>
	)
}

export default Kr
