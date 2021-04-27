import React from 'react'

import '../assets/styles/notifications/Notification.scss'

const ConfigNotification = () => {
	return (
		<div class="containerConfigNotification">
			<div class="titleNoti">
				<h3>Configuración de Notificaciones</h3>
				<span class="icon">
					<i class="fas fa-cogs"></i>
				</span>
			</div>
			<div class="optionsNotifications">
				<div class="option-item">
					<span>
						<i class="fas fa-award"></i>
					</span>
					<p>Generar notificaciones cuando se cumpla el OKR</p>

					<div class="active-options">
						<div class="email">
							<span>
								<i class="fas fa-envelope"></i>
							</span>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>

						<div class="int">
							<span>
								<i class="fas fa-desktop"></i>
							</span>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
					</div>
				</div>

				<div class="option-item">
					<span>
						<i class="fas fa-edit"></i>
					</span>
					<p>Generar notificaciones cada vez que se edita el OKR</p>

					<div class="active-options">
						<div class="email">
							<span>
								<i class="fas fa-envelope"></i>
							</span>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>

						<div class="int">
							<span>
								<i class="fas fa-desktop"></i>
							</span>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
					</div>
				</div>

				<div class="option-item">
					<span>
						<i class="fas fa-smile-beam"></i>
					</span>
					<p>Generar notificaciones cada vez que se cumpla un KR</p>

					<div class="active-options">
						<div class="email">
							<span>
								<i class="fas fa-envelope"></i>
							</span>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>

						<div class="int">
							<span>
								<i class="fas fa-desktop"></i>
							</span>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
					</div>
				</div>

				<div class="option-item">
					<span>
						<i class="fas fa-trash"></i>
					</span>
					<p>Generar notificaciones si se elimina un OKR</p>

					<div class="active-options">
						<div class="email">
							<span>
								<i class="fas fa-envelope"></i>
							</span>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>

						<div class="int">
							<span>
								<i class="fas fa-desktop"></i>
							</span>
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConfigNotification
