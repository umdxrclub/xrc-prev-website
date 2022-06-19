import React from 'react'
import XR_CONSTANTS from '../XR_CONSTANTS';
import ReactMarkdown from 'react-markdown';

class Alert extends React.Component {
  constructor(props) {
    super(props);

    let showAlert = false;
    if (XR_CONSTANTS.ALERT && XR_CONSTANTS.ALERT != "") {
      showAlert = true;
    }
    this.state = { 
      open : showAlert,
    };
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({
      open : false
    });
  }

  render() {

    return (
      <div id="alert" className={ this.state.open ? "" : "closed" }>
        <ReactMarkdown children={XR_CONSTANTS.ALERT} linkTarget="_blank"></ReactMarkdown>
        <img id="close" src="svg/close.svg" onClick={this.close}></img>
      </div>
    );
  }
}

export default Alert;