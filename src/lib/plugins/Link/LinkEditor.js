import { Editor, Range, Transforms } from 'slate';

const TYPE = 'link';

function isActive(editor) {
  const [link] = Editor.nodes(editor, {
    match: n => n.type === TYPE
  });

  return Boolean(link);
}

function unwrap(editor) {
  Transforms.unwrapNodes(editor, {
    match: n => n.type === TYPE
  });
}

function update(editor, id, data) {
  Transforms.setNodes(editor, data, {
    at: [],
    match: n => n.id === id
  });
}

function wrap(editor, url, text, selection) {
  const isCollapsed = selection && Range.isCollapsed(selection);

  const link = {
    children: isCollapsed ? [{ text }] : [],
    type: TYPE,
    url
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link, { at: selection });
  } else {
    Transforms.wrapNodes(editor, link, { at: selection, split: true });
    Transforms.collapse(editor, { at: selection, edge: 'end' });
  }
}

export default {
  ...Editor,
  isActive,
  unwrap,
  update,
  wrap
};
