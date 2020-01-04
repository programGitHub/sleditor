import { Editor, Transforms } from 'slate';

function insert(editor, type, math) {
  const text = { text: '' };
  const block = {
    children: [text],
    type,
    math
  };

  Transforms.insertNodes(editor, block);
}

function update(editor, id, data) {
  console.log(id, data);
  Transforms.setNodes(editor, data, {
    match: n => {
      console.log('testtessettse', n);
    }
  });
}

export default {
  ...Editor,
  insert,
  update
};
