import React from "react";
import "../../assets/styles/administration/Support.css";
import imgQuestions from "../../assets/img/administration/questions.PNG";
import {Link} from "react-router-dom"
import Navbar from "../../components/structure/Navbar"
import Sidebar from "../../components/structure/Sidebar"


export default function Support() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="support-container">
      <div className="support-container-wrapper">
        <div className="card-support">
          <span className="title-support">¿Necesitas ayuda?</span>
          <form >
            <div className="form-container">
            <div className="row-support-form">
              <div className="col-25-support">
                <label className="label-support">Modulo relacionado</label>
              </div>
              <div className="col-75-support">
                <select id="module-support" className="select-support-form">
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
                  name="subject"
                  placeholder="Escribe detalladamente el problema"                  
                ></textarea>
              </div>
            </div>
            </div>
            <div className="row-support-form">
              <button type="submit" id="button-support-form" className="button-support-form"  value="Aceptar" />
            </div>
          </form>
        </div>
        <Link className="link-support-question" to="/faq">
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