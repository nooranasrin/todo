import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text || '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleChange(value) {
    this.setState(() => ({ text: value }));
  }

  handleSubmission(event) {
    event.preventDefault();
    this.setState(() => ({ text: '' }));
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <input
          className='inputBox'
          value={this.state.text}
          onChange={event => this.handleChange(event.target.value)}
          autoFocus
        />
      </form>
    );
  }
}

export default InputBox;
