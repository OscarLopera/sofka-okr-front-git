import React, {useState} from "react";
import "../../assets/styles/administration/Support.css";
import imgQuestions from "../../assets/img/administration/questions.PNG";
import {Link} from "react-router-dom"
import Navbar from "../../components/structure/Navbar"
import Sidebar from "../../components/structure/Sidebar"
import emailjs from 'emailjs-com'


export default function Support() {
  const [user] = useAuthState(auth);
  
  const [data, setData] = useState({
    module: 'dashboard',
    description: 'no tengo ningún mensaje'
})

const handleInputChange = (event) => {  
  setData({
      ...data,
      [event.target.name] : event.target.value
  })
}

const sendEmail = (event) => {
  event.preventDefault()
  console.log('enviando datos...' + data.module + ' ' + data.description)
  emailjs.sendForm('service_q6w5ep3', 'template_sjietpb', event.target, 'user_xNpTGdEXoR0HCjmJkOCiT')
      .then((result) => {
          alert("El mensaje fue enviado a nuestro equipo de soporte");
      }, (error) => {
          console.log(error.text);
      });
  event.target.reset();
}

if (user) {
  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="support-container">
      <div className="support-container-wrapper">
        <div className="card-support">
          <span className="title-support">¿Necesitas ayuda?</span>
          <form onSubmit={sendEmail}>
            <div className="form-container">
            <div className="row-support-form">
              <div className="col-25-support">
                <label className="label-support">Modulo relacionado</label>
              </div>
              <div className="col-75-support">
                <select id="module-support" name="module" className="select-support-form" onChange={handleInputChange} >
                  <option value="dashboard">Dashboard</option>
                  <option value="calendario">Calendario</option>
                  <option value="notificaciones">Notificaciones</option>
                  <option value="administracion">Administración</option>
                </select>
              </div>
            </div>
            <div className="row-support-form">
              <div className="col-25-support">
                <label className="label-support">Descripción</label>
              </div>
              <div className="col-75-support">
                <textarea
                  id="textarea-description-support"
                  className="textarea-description-support"
                  name="description"
                  placeholder="Escribe detalladamente el problema" 
                  onChange={handleInputChange}                  
                ></textarea>
              </div>
            </div>
            </div>
            <div className="row-support-form">
              <button type="submit" id="button-support-form" className="button-support-form" >Aceptar</button>
            </div>
          </form>
        </div>
        <Link className="link-support-question" to="#">
        <div className="card-frequent-questions" id="card-frequent-questions">
        <img src={imgQuestions} className="image-frequent-questions" />
        <span className="title-question-support">Preguntas frecuentes {'>'}</span>
        </div>
        </Link>
      </div>
    </div>
    </>
  );
}
return  <SignIn />
}

export default Support;

