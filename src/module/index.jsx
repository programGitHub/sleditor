import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Editor, { Editable, MenuButton, Toolbar } from 'lib';
import LockIcon from '@material-ui/icons/Lock';
import { orange, purple } from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: orange
  }
});

/**
 * App
 */
const App = () => {
  const [readOnly, setReadOnly] = useState(false);
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

  return (
    <ThemeProvider theme={theme}>
      <Editor onChange={v => setValue(v)} value={value}>
        <Toolbar>
          <Box flex={1} />
          <MenuButton
            color={readOnly ? 'secondary' : 'default'}
            onClick={() => {
              setReadOnly(!readOnly);
            }}
          >
            <LockIcon />
          </MenuButton>
          <MenuButton
            onClick={() => {
              console.log(JSON.stringify(value));
            }}
          >
            <SaveIcon />
          </MenuButton>
        </Toolbar>
        <Editable readOnly={readOnly} />
      </Editor>
    </ThemeProvider>
  );
};

export default App;
