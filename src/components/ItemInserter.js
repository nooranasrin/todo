import React from 'react';
import InputBox from './InputBox';

class ItemInserter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmission() {
    const item = this.state.text;
    this.setState(() => ({ text: '' }));
    this.props.addItem(item);
  }

  handleChange(value) {
    this.setState(() => ({ text: value }));
  }

  render() {
    return (
      <InputBox
        handleSubmission={this.handleSubmission}
        handleChange={this.handleChange}
        text={this.state.text}
      />
    );
  }
}

export default ItemInserter;
