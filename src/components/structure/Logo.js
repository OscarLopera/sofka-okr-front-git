import React from 'react';
import logo from '../../assets/img/logo.png'
const Logo = (props) => (
    <img
      id = "logo-sofkaokr"
      alt="Logo"
      src={logo}
      {...props}
    />
  );
  
  export default Logo;