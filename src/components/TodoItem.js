import React from 'react';
import '../css/TodoItem.css';
import DeleteIcon from './DeleteIcon';
import Status from './Status';
import Description from './Description';

class TodoItem extends React.Component {
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
        className='item'
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
      >
        <Status status={this.props.item.status} />
        <Description item={this.props.item} onClick={this.props.updateStatus} />
        {this.state.isOnHover && (
          <DeleteIcon id={this.props.item.id} remove={this.props.remove} />
        )}
      </div>
    );
  }
}

export default TodoItem;
