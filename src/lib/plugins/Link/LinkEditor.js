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

function wrap(editor, url) {
  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);

  const link = {
    children: isCollapsed ? [{ text: url }] : [],
    type: TYPE,
    url
  };

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
  wrap
};
