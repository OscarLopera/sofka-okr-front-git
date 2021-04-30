import React from 'react';
import "../../assets/styles/administration/faq.scss";
import NavBar from '../../components/structure/Navbar';
import SideBar from '../../components/structure/Sidebar';
import { Link } from 'react-router-dom';

function faq() {
	return (
		<div>
			<NavBar />
			<SideBar />
			<h1>Preguntas frecuentes </h1>

			<div className="faqs-container">
				<div className="faq active">
					<h3 className="faq-title">
						¿Qué es un OKR?
		</h3>
					<p className="faq-text">
						Sus siglas corresponden a Objective and Key Results. Sirve para trazar un objetivo con unos resultados clave para lograr un crecimiento.
		</p>
				</div>

				<div className="faq active">
					<h3 className="faq-title">
						¿Por qué no aparece mi usuario en la plataforma?
		</h3>
					<p className="faq-text">
						Debes asegurarte de estar logueado con una cuenta de Google.....(Aunque si no estás logueado ¿Cómo estás viendo esto?)
		</p>
				</div>

				<div className="faq active">
					<h3 className="faq-title">
						¿Qué es un dashboard?
		</h3>
					<p className="faq-text">
						Es una vista gráfica donde puedes ver el progreso que llevas con tus kr's y okr's, con  gráficas de líneas, porcentajes, números, gráficas circulares, etc.
		</p>
				</div>

				<div className="faq active">
					<h3 className="faq-title">
						¿Por qué la sesión caduca a los dos minutos?
		</h3>
					<p className="faq-text">
						Como Sofkianos estamos comprometidos con la seguridad de la información de cada proyecto que tratemos. Es por esto que para proteger la información de tus OKR's programamos ese tiempo de caducación.
		</p>
				</div>

				<div className="faq active">
					<h3 className="faq-title">
						¿Cómo puedo desactivar las notificaciones?
		</h3>
					<p className="faq-text">
						En el menú lateral izquierdo encontrarás una sección llamada "Administración", luego dale a "Configuración de mis notificaciones", y allí podrás modificar las notificaciones a tu gusto
		</p>
				</div>
				<div className="back-container">
					<Link to="/support" >
						<button className="back"><b>Volver</b></button>
					</Link>
				</div>
			</div>

		</div>
	);
}


export default faq;