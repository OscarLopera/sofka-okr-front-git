import React from 'react';
//import './scss/NotificationList.scss';
import image from './administration/img/orange.png';
import closeImg from './administration/img/close.svg';

class NotificationsListItem extends React.Component {

  render() {

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
          {this.props.notif.detail}

        </div>
    
      <button className = "button_close" id = "button_close">
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