import React from "react";

class Footer extends React.Component {
  render() {
    const style={
      width:'100%',
      padding:'20px 0',
      color:'#fff',
      backgroundColor:'#303036',
      fontFamily:'Roboto',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'100px'
    }
    return (
      <footer style={style}>
        Pei-yun , Lee © 2020
      </footer>
    );
  }
}

export default Footer;
