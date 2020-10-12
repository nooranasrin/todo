import React from 'react';
import TodoItems from './TodoItems';
import TodoTitle from './TodoTitle';
import '../css/Todo.css';
import InputBox from './InputBox';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], id: 0 };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.reset = this.reset.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  addItem(title) {
    this.setState(({ items, id }) => ({
      items: items.concat({ title, status: 'notDone', id: id + 1 }),
      id: id + 1,
    }));
  }

  updateStatus(id) {
    this.setState(({ items }) => {
      const status = { notDone: 'doing', doing: 'done', done: 'notDone' };
      const itemsList = items.map(item => Object.assign({}, item));
      const item = itemsList.find(item => item.id === id);
      item.status = status[item.status];
      return { items: itemsList };
    });
  }

  removeItem(id) {
    this.setState(({ items }) => {
      const itemsList = items.map(item => Object.assign({}, item));
      const item = itemsList.find(item => item.id === id);
      const index = itemsList.indexOf(item);
      itemsList.splice(index, 1);
      return { items: itemsList };
    });
  }

  reset() {
    this.setState(() => ({ items: [], id: 0 }));
  }

  render() {
    return (
      <div className='todo'>
        <TodoTitle reset={this.reset} />
        <TodoItems
          items={this.state.items}
          remove={this.removeItem}
          updateStatus={this.updateStatus}
        />{' '}
        <InputBox onSubmit={this.addItem} />
      </div>
    );
  }
}

export default Todo;
