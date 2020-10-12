import React from 'react';
import InputBox from './InputBox';
import Title from './Title';
import '../css/TodoTitle.css';

class TodoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inEditMode: false, title: 'Todo' };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(title) {
    this.setState(({ inEditMode }) => ({ inEditMode: !inEditMode, title }));
  }

  reset() {
    this.props.reset();
    this.setState(() => ({ title: 'Todo' }));
  }

  render() {
    const title = (
      <Title
        text={this.state.title}
        onClick={() => this.handleClick(this.state.title)}
        reset={this.reset}
      />
    );
    const inputBox = (
      <div className='editableTitle'>
        <InputBox onSubmit={this.handleClick} text={this.state.title} />
      </div>
    );
    return !this.state.inEditMode ? title : inputBox;
  }
}

export default TodoTitle;
