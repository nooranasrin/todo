import React, { useState } from 'react';
import TodoItems from './TodoItems';
import TodoTitle from './TodoTitle';
import '../css/Todo.css';
import InputBox from './InputBox';

const Todo = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  const [heading, setHeading] = useState('Todo');

  const updateState = ({ items, id, heading }) => {
    setItems(items);
    setId(id);
    setHeading(heading);
  };

  const updateStatus = id => {
    const status = { notDone: 'doing', doing: 'done', done: 'notDone' };
    const itemsList = items.map(item => Object.assign({}, item));
    const item = itemsList.find(item => item.id === id);
    item.status = status[item.status];
    updateState({ items: itemsList, id, heading });
  };

  const removeItem = id => {
    const itemsList = items.map(item => Object.assign({}, item));
    const item = itemsList.find(item => item.id === id);
    const index = itemsList.indexOf(item);
    itemsList.splice(index, 1);
    updateState({ items: itemsList, id, heading });
  };

  const addItem = title => {
    const itemsList = items.concat({ title, status: 'notDone', id: id + 1 });
    updateState({ items: itemsList, id: id + 1, heading });
  };

  const updateHeading = (heading = 'Todo') => {
    updateState({ items, id, heading });
  };

  return (
    <div className='todo'>
      <TodoTitle
        reset={() => updateState({ items: [], id: 0 })}
        title={heading}
        update={updateHeading}
      />
      <TodoItems
        items={items}
        remove={removeItem}
        updateStatus={updateStatus}
      />{' '}
      <InputBox onSubmit={addItem} />
    </div>
  );
};

export default Todo;
