import React, { useState } from 'react';
import Editor from 'lib';

/**
 * App
 */
const App = () => {
  const [value, setValue] = useState([
    {
      children: [
        { text: 'Title ' },
        {
          children: [{ text: '' }],
          math: '2x',
          type: 'formula_inline'
        },
        { text: ' with formula.' }
      ],
      type: 'title'
    },
    {
      category: 'info',
      children: [
        {
          children: [
            { text: 'A line of text in a paragraph.' },
            {
              children: [{ text: 'Un Super Lien' }],
              type: 'link',
              url: 'url'
            },
            { text: 'A line of text in a paragraph.' },
            {
              children: [{ text: 'Un Super Lien' }],
              type: 'link',
              url: 'url'
            }
          ],
          type: 'paragraph'
        },
        {
          follow: true,
          children: [
            {
              children: [{ text: 'list item 3' }],
              type: 'list-item'
            },
            {
              children: [{ text: 'list item 4' }],
              type: 'list-item'
            }
          ],
          type: 'list-number'
        }
      ],
      type: 'highlight'
    },
    {
      follow: true,
      children: [
        {
          children: [{ text: 'list item 1' }],
          type: 'list-item'
        },
        {
          children: [{ text: 'list item 2' }],
          type: 'list-item'
        }
      ],
      type: 'list-number'
    },
    {
      children: [{ text: '' }],
      math: '2x+4',
      type: 'formula_block'
    },
    {
      category: 'default',
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
      align: 'center',
      children: [{ text: '' }],
      type: 'image',
      url:
        'https://images.unsplash.com/photo-1532450106241-ed30d951fbb5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
    }
  ]);

  return <Editor onChange={v => setValue(v)} value={value} />;
};

export default App;
