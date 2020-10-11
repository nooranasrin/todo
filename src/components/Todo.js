import React from 'react';
import TodoItems from './TodoItems';
import ItemInserter from './ItemInserter';
import TodoTitle from './TodoTitle';
import '../css/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.reset = this.reset.bind(this);
  }

  addItem(item) {
    this.setState(({ items }) => ({ items: items.concat(item) }));
  }

  removeItem(index) {
    this.setState(({ items }) => {
      const itemsList = items.slice(0);
      itemsList.splice(index, 1);
      return { items: itemsList };
    });
  }

  reset() {
    this.setState(() => ({ items: [] }));
  }

  render() {
    return (
      <div className='todo'>
        <TodoTitle reset={this.reset} />
        <TodoItems items={this.state.items} remove={this.removeItem} />{' '}
        <ItemInserter addItem={this.addItem} />
      </div>
    );
  }
}

export default Todo;
