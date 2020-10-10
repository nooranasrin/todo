import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'notDone' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const status = { notDone: 'doing', doing: 'done', done: 'notDone' };
    this.setState(state => ({ status: status[state.status] }));
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
    return (
      <div className='item' onClick={this.handleChange}>
        <div className={this.getClass() + ' status'}>&nbsp;</div>
        <div className='itemDescription' style={this.getStyle()}>
          {this.props.item}
        </div>
      </div>
    );
  }
}

export default TodoItem;
