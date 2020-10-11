import React from 'react';
import TodoItems from './TodoItems';
import InputBox from './InputBox';
import TodoTitle from './TodoTitle';
import '../css/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
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

  render() {
    return (
      <div className='todo'>
        <TodoTitle />
        <TodoItems items={this.state.items} remove={this.removeItem} />{' '}
        <InputBox addItem={this.addItem} />
      </div>
    );
  }
}

export default Todo;
