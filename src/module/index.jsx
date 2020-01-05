import React, { useState } from 'react';
import Editor from 'lib';

/**
 * App
 */
const App = () => {
  const [value, setValue] = useState([
    {
      id: 'test_1',
      children: [
        { text: 'A line of text in a paragraph.' },
        {
          children: [{ text: 'Un Super Lien' }],
          id: 'testLink',
          type: 'link',
          url: 'url'
        },
        { text: 'A line of text in a paragraph.' }
      ],
      type: 'paragraph'
    },
    {
      id: 'test_2',
      children: [{ text: '' }],
      math: '2x+4',
      type: 'formula_block'
    },
    {
      id: 'test_6',
      children: [
        {
          id: 'test_3',
          children: [{ text: 'ceci est un test' }],
          type: 'paragraph'
        },
        {
          id: 'test_4',
          children: [{ text: 'ceci est un test' }],
          type: 'paragraph'
        }
      ],
      type: 'highlight'
    },
    {
      id: 'test_5',
      children: [{ text: '' }],
      type: 'image',
      url:
        'https://images.unsplash.com/photo-1532450106241-ed30d951fbb5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
    }
  ]);

  return <Editor onChange={v => setValue(v)} value={value} />;
};

export default App;
