import React from 'react';
import '../css/TodoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'notDone', isMouseOnOver: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleChange() {
    const status = { notDone: 'doing', doing: 'done', done: 'notDone' };
    this.setState(state => ({ status: status[state.status] }));
  }

  handleHover() {
    this.setState(({ isMouseOnOver }) => ({ isMouseOnOver: !isMouseOnOver }));
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
        onMouseOver={this.handleHover}
        onMouseLeave={this.handleHover}
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
