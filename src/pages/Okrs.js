import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/planification/Planification.scss'

const Okrs = () => {
	window.onload = function () {
		const field = document.querySelectorAll('.field')

		field.forEach(function (e) {
			console.log(e)
			e.addEventListener('click', () => {
				const slideValue = e.parentNode.childNodes[1].childNodes[1]
				const inputSlider = e.childNodes[3]

				inputSlider.oninput = () => {
					let value = inputSlider.value

					slideValue.textContent = value
					slideValue.style.left = value / 1 + '%'
					slideValue.classList.add('show')
				}
			})
		})
	}

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
								<div className="range">
									<div className="sliderValue">
										<span className="bb">100</span>
									</div>
									<div className="field">
										<div className="value left">0</div>
										<input type="range" min="10" max="100" value="0" steps="1" />
										<div className="value right">100</div>
									</div>
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
								<div className="range">
									<div className="sliderValue">
										<span className="bb">100</span>
									</div>
									<div className="field">
										<div className="value left">0</div>
										<input type="range" min="10" max="100" value="0" steps="1" />
										<div className="value right">100</div>
									</div>
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
								<div className="range">
									<div className="sliderValue">
										<span className="bb">100</span>
									</div>
									<div className="field">
										<div className="value left">0</div>
										<input type="range" min="10" max="100" value="0" steps="1" />
										<div className="value right">100</div>
									</div>
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
								<div className="range">
									<div className="sliderValue">
										<span className="bb">100</span>
									</div>
									<div className="field">
										<div className="value left">0</div>
										<input type="range" min="10" max="100" value="0" steps="1" />
										<div className="value right">100</div>
									</div>
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
