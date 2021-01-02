import React from "react";


class Tag extends React.Component {
  constructor(props) {
    super(props);
    };
  
  render() {
    const style = {
      backgroundColor: 'rgba(82, 82, 82, 0.62)',
      color: '#fff',
      fontFamily: 'Noto Sans',
      fontWeight: '400',
      padding: '5px 8px',
      width: 'max-content'
    };

    return (
      <div style={style}>{this.props.content}</div>
    );
  }
}

export default Tag;
