import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmission(event) {
    event.preventDefault();
    const item = this.state.text;
    this.setState(() => ({ text: '' }));
    this.props.addItem(item);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({ text: value }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <input value={this.state.text} onChange={this.handleChange} />
      </form>
    );
  }
}

export default InputBox;
