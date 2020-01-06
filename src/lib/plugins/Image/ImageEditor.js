import { Editor, Transforms } from 'slate';

function insert(editor, url, selection) {
  const text = { text: '' };
  const image = {
    children: [text],
    type: 'image',
    url
  };

  Transforms.insertNodes(editor, image, { at: selection });
}

function update(editor, id, data) {
  Transforms.setNodes(editor, data, { at: [], match: n => n.id === id });
}

export default {
  ...Editor,
  insert,
  update
};
