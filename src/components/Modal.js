import React from 'react'
import XR_CONSTANTS from '../XR_CONSTANTS';
import ReactMarkdown from 'react-markdown';

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      open : false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({
      open: true
    });
  }

  close() {
    this.setState({
      open : false
    });
  }

  render() {

    return (
      <div>

        <span id="open-modal-btn" onClick={this.open}>{this.props.children}</span>

        <div id="myModal" class="modal" style={this.state.open ? {display:"block"} : {display:"none"}}
          onClick={this.close}>

          <div class="modal-content">
            <span class="modal-close" onClick={this.close}>&times;</span>
            <ReactMarkdown children={this.props.content} linkTarget="_blank"></ReactMarkdown>
            <div id="modal-action-button" class="button" onClick={this.props.action}>
                {this.props.actionLabel}
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Modal;