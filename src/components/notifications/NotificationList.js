import React from 'react';
import '../../assets/styles/notifications/NotificationList.scss'
import image from '../administration/img/orange.png';
import closeImg from '../administration/img/close.svg';

class NotificationsListItem extends React.Component {

  render() {

    const message = 
      (this.props.notif.detail==="30") ? this.props.notif.detail + "% Sigue Esforzandote":
      (this.props.notif.detail==="70") ? this.props.notif.detail + "% Ya casi lo logras":
      "Finalizado";

    return (
      <div className = "NotifsListItem" id = "NotifsListItem">
        <img
          className="NotifsListItem__avatar" id = "NotifsListItem__avatar"
          src = {image}
          alt={`${this.props.notif.name} ${this.props.notif.typeN}`}
        />

        <div className = "Detail" id = "Detail">
          <strong>
            {this.props.notif.name} 
            <br/>
            {this.props.notif.typeN}
          </strong>
          <br />
          {message}

        </div>
    
      <button className = "button_close" id = "button_closeNotification">
      <img
          className = "NotifsListItem__close" id = "NotifsListItem__close"
          src = {closeImg}
          alt="Clear Notification"
          />
      </button>
        
      </div>
    );
  }
}

class NotificationsList extends React.Component {
  render() {
    return (
      <div className = "NotifsList" id = "NotifsList">
        <ul className = "list-unstyled" id = "list-unstyled">
          {this.props.notifications.map(notif => {
            return (
              <li key={notif.id}>
                <NotificationsListItem notif={notif} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NotificationsList; 