import React from 'react';
import '../css/TodoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'notDone', isMouseOnOver: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleOver = this.handleOver.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleChange() {
    const status = { notDone: 'doing', doing: 'done', done: 'notDone' };
    this.setState(state => ({ status: status[state.status] }));
  }

  handleOver() {
    this.setState(() => ({ isMouseOnOver: true }));
  }

  handleLeave() {
    this.setState(() => ({ isMouseOnOver: false }));
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

  render() {
    const component = this.state.isMouseOnOver ? <div>X</div> : '';
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
        {component}
      </div>
    );
  }
}

export default TodoItem;
