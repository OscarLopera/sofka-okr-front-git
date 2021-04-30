import {React,useEffect,useState} from 'react'

import '../../assets/styles/notifications/Notification.scss'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

const ConfigNotificationView = ({config}) => {

    const  Swal = () => {
		console.log(config.mailCompletedOkr, config.notificationCompletedOkr, config.mailCompletedKr, config.notificationCompletedKr)
        return (
			swal("Correcto", "La configuración ha sido guardada", "success")
			)
	};
	useEffect (()=>{

	},[])
	return (
		<div className="containerConfigNotification">
			<div className="titleNoti">
				<h3>Configuración de Notificaciones</h3>
				<span className="icon">
					<i style={{ fontSize: "60px" }} class="fas fa-wrench"></i>
				</span>
			</div>
			<div className="optionsNotifications">
				<div className="option-icons-mail-notification">
					
						<div className="email">
							<span ><i style={{ fontSize: "40px" }} class="far fa-envelope"></i></span>
						</div>
						<div className="int">
							<span><i style={{ fontSize: "40px" }} class="fas fa-desktop"></i></span>
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
								<input type="checkbox" id = "mailFullOkr" onClick = {config.mailCompletedOkr = !config.mailCompletedOkr} checked = {config.mailCompletedOkr}/>
								<span className="slider round"></span>
							</label>
						</div>
						<label className="switch">
							<input type="checkbox" id = "notiFullOkr" onClick = {config.notificationCompletedOkr = !config.notificationCompletedOkr} checked = {config.notificationCompletedOkr} />
							<span className="slider round"></span>
						</label>
					</div>
				</div>
				<div className="option-item">
					<span>
						<i class="far fa-edit"></i>
					</span>

					<p >Generar notificaciones cada vez que se cumpla un KR</p>
					
					<div className="active-options">
						<div className="email">
							<label className="switch">
								<input type="checkbox" id = "mailFullKr" onClick = {config.mailCompletedKr = !config.mailCompletedKr} checked = {config.mailCompletedKr} />
								<span className="slider round"></span>
							</label>
						</div>
						<label className="switch">
							<input type="checkbox" id = "notiFullKr" onClick = {config.notificationCompletedKr = !config.notificationCompletedKr} checked = {config.notificationCompletedKr} />
							<span className="slider round"></span>
						</label>
					</div>
				</div>
			</div>
			<div className="titleNoti">
				<span>
				<Button size="medium" variant="contained" color="primary" onClick={Swal} >Confirmar</Button>
				</span>
			</div>
		</div>
	)

}

export default ConfigNotificationView;