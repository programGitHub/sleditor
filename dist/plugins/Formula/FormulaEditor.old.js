import { Editor, Path, Range, Transforms } from 'slate';
const types = {
  BLOCK: 'formula_block',
  INLINE: 'formula_inline'
};

function getText(editor, selection) {
  if (Path.equals(selection.anchor.path, selection.focus.path)) {
    const [node] = Editor.nodes(editor, {
      at: selection,
      mode: 'lowest'
    });
    const text = node[0];

    if (!text || !Object.hasOwnProperty.call(text, 'text')) {
      throw new Error('Error');
    }

    return text.text.slice(selection.anchor.offset, selection.focus.offset);
  }
}

function insert(editor, type, m, selection = null) {
  const math = Range.isExpanded(selection) ? getText(editor, selection) : m;
  const text = {
    text: ''
  };
  const block = {
    children: [text],
    type,
    math
  };
  Transforms.select(editor, selection);
  Transforms.insertNodes(editor, block);
}

function update(editor, data) {
  // console.log(data);
  Transforms.setNodes(editor, data, {
    match: n => n.type === types.BLOCK || n.type === types.INLINE
  });
}

export default { ...Editor,
  insert,
  update
};