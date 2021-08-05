import React, { useState } from 'react';

function CreateArea() {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const [itemValues, setItemValues] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setItems(newItem);
  }

  function handleClick(event) {
    console.log('Clicked');
    setItemValues(items);

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name='title'
          value={note.title}
          placeholder='Title'
          value='item'
          onChange={handleChange}
        />
        <textarea
          name='content'
          value={note.content}
          placeholder='Take a note...'
          rows='3'
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
