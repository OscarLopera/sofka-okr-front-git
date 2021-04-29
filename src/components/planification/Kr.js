import React from 'react'

const Kr = ({ kr }) => {
	return (
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
	)
}

export default Kr
