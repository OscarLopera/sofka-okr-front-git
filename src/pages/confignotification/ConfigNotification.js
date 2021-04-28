import React from 'react'

import '../../assets/styles/notifications/Notification.scss'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';


const ConfigNotification = () => {
	const  Swal = () => {
        return (swal("Correcto", "La configuración ha sido guardada", "success"))
	};
	return (
		<div className="containerConfigNotification">
			<div className="titleNoti">
				<h3>Configuración de Notificaciones</h3>
				<span className="icon">
					<i style={{ fontSize: "60px" }} class="fas fa-wrench"></i>
				</span>
			</div>
			<div className="optionsNotifications">
				<div className="option-item">
					<span></span>
					<p></p>
					<div className="active-options">
						<div className="email">
							<span ><i style={{ fontSize: "40px" }} class="far fa-envelope"></i></span>
						</div>
						<div className="int">
							<span><i style={{ fontSize: "40px" }} class="fas fa-desktop"></i></span>
						</div>
					</div>
				</div>
				<div className="option-item">
					<span>
						<i class="fas fa-trophy"></i>
					</span>
					<p>Generar notificaciones cuando se cumple el OKR</p>
					<div className="active-options">
						<div className="email">
							<label className="switch">
								<input type="checkbox" id = "mailFullOkr" />
								<span className="slider round"></span>
							</label>
						</div>
						<label className="switch">
							<input type="checkbox" id = "notiFullOkr" />
							<span className="slider round"></span>
						</label>
					</div>
				</div>
				<div className="option-item">
					<span>
						<i class="far fa-edit"></i>
					</span>
					<p>Generar notificaciones cada vez que se edita el OKR</p>
					<div className="active-options">
						<div className="email">
							<label className="switch">
								<input type="checkbox" id = "mailEditOkr"/>
								<span className="slider round"></span>
							</label>
						</div>
						<label className="switch">
							<input type="checkbox" id = "notiEditOkr"/>
							<span className="slider round"></span>
						</label>
					</div>
				</div>
				<div className="option-item">
					<span>
						<i class="fas fa-file-medical"></i>
					</span>
					<p>Generar notificaciones cada vez que se cumpla un KR</p>
					<div className="active-options">
						<div className="email">
							<label className="switch">
								<input type="checkbox" id = "mailFullOk" />
								<span className="slider round"></span>
							</label>
						</div>
						<label className="switch">
							<input type="checkbox" id = "notiFullOk" />
							<span className="slider round"></span>
						</label>
					</div>
				</div>
				<div className="option-item">
					<span>
						<i class="far fa-trash-alt"></i>
					</span>
					<p>Generar notificaciones si se elimina el OKR</p>
					<div className="active-options">
						<div className="email">
							<label className="switch">
								<input type="checkbox" id = "mailDeleteOkr" />
								<span className="slider round"></span>
							</label>
						</div>
						<label className="switch">
							<input type="checkbox" id = "notiDeleteOkr"/>
							<span className="slider round"></span>
						</label>
					</div>
				</div>
			</div>
			<div className="titleNoti">
				<span>
				<button size="medium" variant="contained" color="primary" onClick={Swal} >Confirmar</button>
				{"    "}
				<button size="medium" variant="contained" color="secondary">Descartar Cambios</button>
				</span>
			</div>
		</div>
	)
}

export default ConfigNotification
