import React, { useState } from 'react';
import Editor from 'lib';

/**
 * App
 */
const App = () => {
  const [value, setValue] = useState([
    {
      children: [{ text: 'A line of text in a paragraph.' }],
      type: 'paragraph'
    },
    {
      children: [
        {
          children: [{ text: 'ceci est un test' }],
          type: 'paragraph'
        },
        {
          children: [{ text: 'ceci est un test' }],
          type: 'paragraph'
        }
      ],
      type: 'highlight'
    },
    {
      children: [{ text: '' }],
      type: 'image',
      url:
        'https://images.unsplash.com/photo-1532450106241-ed30d951fbb5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
    }
  ]);

  return <Editor onChange={v => setValue(v)} value={value} />;
};

export default App;
