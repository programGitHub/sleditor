import { Editor, Transforms } from 'slate';

function insert(editor, type, math, selection = null) {
  const text = { text: '' };
  const block = {
    children: [text],
    type,
    math
  };

  Transforms.insertNodes(editor, block, { at: selection });
}

function update(editor, id, data) {
  Transforms.setNodes(editor, data, {
    at: [],
    match: n => n.id === id
  });
}

export default {
  ...Editor,
  insert,
  update
};
