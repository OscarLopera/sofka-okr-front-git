import React, { useState } from "react";
import { Modal } from '@material-ui/core';
import "../../../assets/styles/notifications/ModalBell.scss";
import bell from "../../administration/img/notifications.svg";
import bell2 from "../../administration/img/notifications_active.svg";
import NotificationsList from "../../NotificationList"



function ModalBell(props) {


  const [modal, setModal] = useState(false);

  const open_close_Modal = () => {
    setModal(!modal);
  }

  if (props.state) {
    const views = props.state.map(notif => notif.viewed)

    const view = views.toString().includes(false).toString();

    const notificationIcon = (view === "true") ? bell2 : bell;

    const body = (
      <div className="Modal" id="Modal">
        <div align="center">
          <header id="header"><strong>Notificaciones</strong>
            <button className="button_cerrar" id="button_cerrar" onClick={() => open_close_Modal()}>X</button>
          </header>
          <NotificationsList notifications={props.state} />
        </div>
      </div>
    );

    return (
      <div className="App" id="App">
        <button className='button' id="button" onClick={() => open_close_Modal()}>
          <img src={notificationIcon} alt="bell" />
        </button>
        <Modal open={modal} onClose={open_close_Modal}>
          {body}
        </Modal>
      </div>
    )
  }
}


export default ModalBell;
