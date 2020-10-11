import React from 'react';
import '../css/TodoItem.css';
import DeleteIcon from './DeleteIcon';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'notDone', isOnHover: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleOver = this.handleOver.bind(this);
  }

  handleChange() {
    const status = { notDone: 'doing', doing: 'done', done: 'notDone' };
    this.setState(state => ({ status: status[state.status] }));
  }

  handleOver() {
    this.setState(() => ({ isOnHover: true }));
  }

  handleLeave() {
    this.setState(() => ({ isOnHover: false }));
  }

  getClass() {
    return this.state.status === 'done'
      ? 'done'
      : this.state.status === 'notDone'
      ? 'notDone'
      : 'doing';
  }

  getStyle() {
    const { status } = this.state;
    return status === 'done' ? { textDecoration: 'line-through' } : {};
  }

  getDeleteIcon() {
    return <DeleteIcon id={this.props.id} remove={this.props.remove} />;
  }

  render() {
    return (
      <div
        className='item'
        onClick={this.handleChange}
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
      >
        <div className={this.getClass() + ' status'}>&nbsp;</div>
        <div className='itemDescription' style={this.getStyle()}>
          {this.props.item}
        </div>
        {this.state.isOnHover && this.getDeleteIcon()}
      </div>
    );
  }
}

export default TodoItem;
