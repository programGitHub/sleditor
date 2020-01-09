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

function update(editor, selection, data) {
  Transforms.setNodes(editor, data, {
    at: selection,
    match: n => n.type === TYPE
  });
}

function wrap(editor, url, text, selection) {
  const isCollapsed = selection && Range.isCollapsed(selection);

  const link = {
    children: isCollapsed ? [{ text }] : [],
    type: TYPE,
    url
  };

  Transforms.select(editor, selection);

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: 'end' });
  }
}

export default {
  ...Editor,
  isActive,
  unwrap,
  update,
  wrap
};
