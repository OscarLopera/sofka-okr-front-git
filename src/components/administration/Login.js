import React,{useState} from "react";

import "../../assets/styles/administration/Administration.scss";
import { auth } from "../../functions/firebaseAuth";



function Login({signInWithGoogle}) {
  const [transformText,setTransformText]=useState(false);
  function transformTextButton(){
   if (auth.currentUser){
     setTransformText(false);
   }else{
     setTransformText(true);
   }
   signInWithGoogle()

  }
  return (
    <div className="container">
      <div className="container-paragraph">
        <p>Nosotros </p>
        <h1>La importancia de los logros en nuestra organización</h1>
        <p>
          Somos una compañía que desde sus inicios viene desarrollando el
          talento tanto técnico como humano, para estar a la vanguardia de la
          industria tecnológica generando soluciones de alto impacto para
          nuestros clientes con los que siempre trabajamos en equipo.
        </p>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQHd0YFN4E45lA/company-logo_200_200/0/1613059028960?e=2159024400&v=beta&t=GZWNaNUyyzB4KWXQX-tZFNl8Mx7GeKuv9tkNtCCMuT0"
          alt=""
        ></img>
      </div>

      <div className="container-login">
        <div className="container-login-buttonGoogle">
          <button data-testid="buttonSinginwithGoogle" onClick={transformTextButton}>
            <img
              src="https://img.icons8.com/fluent/50/000000/google-logo.png"
              alt="icon-google"
            />
            {transformText? "Cargando ...":" Sign up with Google" }
          </button>
        </div>

        <div>
          <img
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
