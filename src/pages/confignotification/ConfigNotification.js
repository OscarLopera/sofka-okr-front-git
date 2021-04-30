import React from "react";
import "../../assets/styles/notifications/Notification.scss";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import Navbar from "../../components/structure/Navbar";
import { auth } from "../../functions/firebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../administration/SingIn";

const ConfigNotification = () => {
  const [user] = useAuthState(auth);
  const Swal = () => {
    return swal("Correcto", "La configuración ha sido guardada", "success");
  };

  if (user) {
    return (
      <>
        <Navbar />
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
                <span>
                  <i style={{ fontSize: "40px" }} class="far fa-envelope"></i>
                </span>
              </div>
              <div className="int">
                <span>
                  <i style={{ fontSize: "40px" }} class="fas fa-desktop"></i>
                </span>
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
                    <input type="checkbox" id="mailFullOkr" />
                    <span className="slider round"></span>
                  </label>
                </div>
                <label className="switch">
                  <input type="checkbox" id="notiFullOkr" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="option-item">
              <span>
                <i class="far fa-edit"></i>
              </span>

              <p>Generar notificaciones cada vez que se cumpla un KR</p>

              <div className="active-options">
                <div className="email">
                  <label className="switch">
                    <input type="checkbox" id="mailFullOk" />
                    <span className="slider round"></span>
                  </label>
                </div>
                <label className="switch">
                  <input type="checkbox" id="notiFullOk" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="titleNoti">
            <span>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                onClick={Swal}
                id="buttonConfig1"
              >
                Confirmar
              </Button>
              {"    "}
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                id="buttonConfig2"
              >
                Descartar Cambios
              </Button>
            </span>
          </div>
        </div>
      </>
    );
  }
  return <SignIn />;
};

export default ConfigNotification;
