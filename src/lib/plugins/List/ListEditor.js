import { Editor, Element, Transforms, Path } from 'slate';
import { ReactEditor } from 'slate-react';

const type = {
  BULLET: 'list-bullet',
  ITEM: 'list-item',
  NUMBER: 'list-number'
};

function getStart(editor, el, n) {
  if (!el.follow) {
    return 1;
  }

  const path = ReactEditor.findPath(editor, el);
  const startPath = [...path.slice(0, -1), 0];
  const [...nodes] =
    n ||
    Editor.nodes(editor, {
      at: {
        anchor: { path: startPath, offset: 0 },
        focus: { path, offset: 0 }
      },
      match: n => {
        if (n.type !== type.NUMBER) {
          return false;
        }

        return Path.isSibling(ReactEditor.findPath(editor, n), path);
      },
      mode: 'lowest'
    });

  if (nodes.length === 0) {
    return 1;
  }

  const next = nodes.pop()[0];

  return getStart(editor, next, nodes) + next.children.length;
}

function isActive(editor, listType) {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === listType
  });

  return Boolean(match);
}

function isList(node) {
  return (
    Element.isElement(node) &&
    (node.type === type.BULLET || node.type === type.NUMBER)
  );
}

function isListItem(node) {
  return Element.isElement(node) && node.type === type.ITEM;
}

function toggle(editor, listType) {
  const active = isActive(editor, listType);

  Transforms.unwrapNodes(editor, {
    match: n => n.type === type.BULLET || n.type === type.NUMBER,
    split: true
  });

  Transforms.setNodes(editor, {
    type: active ? 'paragraph' : type.ITEM
  });

  if (!active) {
    const block =
      listType === 'list-number'
        ? {
            follow: false,
            children: [],
            type: listType
          }
        : {
            children: [],
            type: listType
          };

    Transforms.wrapNodes(editor, block);
  }
}

function update(editor, data) {
  Transforms.setNodes(editor, data, {
    at: editor.selection,
    match: n => n.type === type.BULLET || n.type === type.NUMBER
  });
}

export default {
  ...Editor,
  getStart,
  isActive,
  isList,
  isListItem,
  toggle,
  update
};
