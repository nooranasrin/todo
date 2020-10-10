import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDone: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(state => ({ isDone: !state.isDone }));
  }

  getClass() {
    return this.state.isDone ? 'done' : 'notDone';
  }

  render() {
    const className = this.getClass();
    const status = <div className={className + ' statusIndicator'}>&nbsp;</div>;
    return (
      <div className='item' onClick={this.handleChange}>
        {status}
        <div
          className='itemDescription'
          style={this.state.isDone ? { textDecoration: 'line-through' } : {}}
        >
          {this.props.item}
        </div>
      </div>
    );
  }
}

export default TodoItem;
