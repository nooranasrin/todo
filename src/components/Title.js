import React from 'react';
import '../css/Title.css';
import DeleteIcon from './DeleteIcon';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnHover: false };
    this.handleLeave = this.handleLeave.bind(this);
    this.handleOver = this.handleOver.bind(this);
  }

  handleOver() {
    this.setState(() => ({ isOnHover: true }));
  }

  handleLeave() {
    this.setState(() => ({ isOnHover: false }));
  }

  render() {
    return (
      <div
        className='title'
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
      >
        <div style={{ width: '260px' }}>
          <div className='titleText' onClick={this.props.onClick}>
            {this.props.text}
          </div>
        </div>
        {this.state.isOnHover && <DeleteIcon remove={this.props.reset} />}
      </div>
    );
  }
}

export default Title;
