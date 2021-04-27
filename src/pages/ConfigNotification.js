import React from 'react'

import '../assets/styles/notifications/Notification.scss'

const ConfigNotification = () => {
	return (
		<div className="containerConfigNotification">
			<div className="titleNoti">
				<h3>Configuración de Notificaciones</h3>
				<span className="icon">
					<i className="fas fa-cogs"></i>
				</span>
			</div>
			<div className="optionsNotifications">
				<div className="option-item">
					<span>
						<i className="fas fa-award"></i>
					</span>
					<p>Generar notificaciones cuando se cumpla el OKR</p>

					<div className="active-options">
						<div className="email">
							<span>
								<i className="fas fa-envelope"></i>
							</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>

						<div className="int">
							<span>
								<i className="fas fa-desktop"></i>
							</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>
					</div>
				</div>

				<div className="option-item">
					<span>
						<i className="fas fa-edit"></i>
					</span>
					<p>Generar notificaciones cada vez que se edita el OKR</p>

					<div className="active-options">
						<div className="email">
							<span>
								<i className="fas fa-envelope"></i>
							</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>

						<div className="int">
							<span>
								<i className="fas fa-desktop"></i>
							</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>
					</div>
				</div>

				<div className="option-item">
					<span>
						<i className="fas fa-smile-beam"></i>
					</span>
					<p>Generar notificaciones cada vez que se cumpla un KR</p>

					<div className="active-options">
						<div className="email">
							<span>
								<i className="fas fa-envelope"></i>
							</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>

						<div className="int">
							<span>
								<i className="fas fa-desktop"></i>
							</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>
					</div>
				</div>

				<div className="option-item">
					<span>
						<i className="fas fa-trash"></i>
					</span>
					<p>Generar notificaciones si se elimina un OKR</p>

					<div className="active-options">
						<div className="email">
							<span>
								<i className="fas fa-envelope"></i>
							</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>

						<div className="int">
							<span>
								<i className="fas fa-desktop"></i>
							</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConfigNotification
