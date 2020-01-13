import { Editor, Transforms } from 'slate';
const TYPE = 'image';

function insert(editor, url, selection) {
  const text = {
    text: ''
  };
  const image = {
    align: 'flex-start',
    children: [text],
    type: TYPE,
    url
  };
  Transforms.select(editor, selection);
  Transforms.insertNodes(editor, image);
}

function update(editor, selection, data) {
  Transforms.setNodes(editor, data, {
    at: selection,
    match: n => n.type === TYPE
  });
}

export default { ...Editor,
  insert,
  update
};