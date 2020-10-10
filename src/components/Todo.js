import React from 'react';
import TodoItems from './TodoItems';
import InputBox from './InputBox';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState(({ items }) => ({ items: items.concat(item) }));
  }

  render() {
    return (
      <div className='todo'>
        <h2>Todo</h2>
        <TodoItems items={this.state.items} />{' '}
        <InputBox addItem={this.addItem} />
      </div>
    );
  }
}

export default Todo;
