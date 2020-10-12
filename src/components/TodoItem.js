import React from 'react';
import '../css/TodoItem.css';
import DeleteIcon from './DeleteIcon';
import Status from './Status';

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
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
      >
        <Status status={this.state.status} />
        <div style={{ width: '230px' }}>
          <div
            className='itemDescription'
            style={this.getStyle()}
            onClick={this.handleChange}
          >
            {this.props.item}
          </div>
        </div>
        {this.state.isOnHover && this.getDeleteIcon()}
      </div>
    );
  }
}

export default TodoItem;
