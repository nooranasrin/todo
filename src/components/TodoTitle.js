import React from 'react';
import EditableTitle from './EditableTitle';
import Title from './Title';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inEditMode: false, text: 'Todo' };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState(() => ({ text: value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleClick();
  }

  handleClick() {
    this.setState(({ inEditMode }) => ({ inEditMode: !inEditMode }));
  }

  render() {
    const title = <Title text={this.state.text} onClick={this.handleClick} />;
    const inputBox = (
      <EditableTitle
        text={this.state.text}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
    return !this.state.inEditMode ? title : inputBox;
  }
}

export default TodoTitle;
