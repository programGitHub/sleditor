import { Editor, Transforms } from 'slate';

function insert(editor, url) {
  const text = { text: '' };
  const image = {
    children: [text],
    type: 'image',
    url
  };

  Transforms.insertNodes(editor, image);
}

function update(editor, data) {
  Transforms.setNodes(editor, data);
}

export default {
  ...Editor,
  insert,
  update
};
