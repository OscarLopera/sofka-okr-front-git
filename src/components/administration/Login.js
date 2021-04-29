import React from "react";
import "../../assets/styles/administration/Administration.scss";

function Login({ signInWithGoogle }) {

  return (
    <div id = "container-administration-login" className="container-administration-login">
      <div id = "container-paragraph" className="container-paragraph">
        <p id = "paragraph-login">Nosotros </p>
        <h1 id = "title-paragraph">La importancia de los logros en nuestra organización</h1>
        <p id = "paragraph">
          Somos una compañía que desde sus inicios viene desarrollando el
          talento tanto técnico como humano, para estar a la vanguardia de la
          industria tecnológica generando soluciones de alto impacto para
          nuestros clientes con los que siempre trabajamos en equipo.
        </p>
        <img id = "logo-sofka-login"
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQHd0YFN4E45lA/company-logo_200_200/0/1613059028960?e=2159024400&v=beta&t=GZWNaNUyyzB4KWXQX-tZFNl8Mx7GeKuv9tkNtCCMuT0"
          alt=""
        ></img>
      </div>

      <div id = "container-login" className="container-login">
        <div id = "container-login-buttonGoogle" className="container-login-buttonGoogle">
          <button 
            id = "buttonSinginwithGoogle"
            data-testid="buttonSinginwithGoogle"
            onClick={signInWithGoogle}
          >
            <img
              id = "logo-google-login"
              src="https://img.icons8.com/fluent/50/000000/google-logo.png"
              alt="icon-google"
            />
            Sign up with Google
          </button>
        </div>

        <div id = "container-img-sofka">
          <img
            id = "img-sofkateam-login"
            data-testid="staff-image"
            className="container-login__image"
            src="https://www.sofka.com.co/wp-content/uploads/2020/09/work-with-us-home.png"
            alt="sofka"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
