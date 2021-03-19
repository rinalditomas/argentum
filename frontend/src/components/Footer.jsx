import React from "react";

const Footer = () => {
  return (
    <div style={{width:"100%", float:"left", bottom:"0", zIndex:"999999", height:"65px", boxShadow: "0px -3px rgba(0, 0, 0, 0.4)",backgroundColor: "#FFCA8F"}}>
     <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{backgroundColor: "#FFCA8F", margin:"0 auto",display:'flex'}}>
        <img src="https://i.ibb.co/VpYy0sQ/logo.png" alt="" style={{ width: "180px",}} />

        <a style={{position:"relative",fontFamily: "'Lobster', cursive", fontSize:"20px", margin: "0 auto",display:'flex',alignItems:'center'}}>© 2021</a>

      </div>
    </div>
    </div>
  );
};

export default Footer;