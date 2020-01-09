import { Editor, Transforms } from 'slate';

const types = {
  BLOCK: 'formula_block',
  INLINE: 'formula_inline'
};

function insert(editor, type, math, selection = null) {
  const text = { text: '' };
  const block = {
    children: [text],
    type,
    math
  };

  Transforms.select(editor, selection);
  Transforms.insertNodes(editor, block);
}

function update(editor, selection, data) {
  Transforms.setNodes(editor, data, {
    at: selection,
    match: n => n.type === types.BLOCK || n.type === types.INLINE
  });
}

export default {
  ...Editor,
  insert,
  update
};
