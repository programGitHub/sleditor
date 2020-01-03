import { Editor, Element, Transforms } from 'slate';
import shortid from 'shortid';

const type = {
  BULLET: 'list-bullet',
  ITEM: 'list-item',
  NUMBER: 'list-number'
};

function getStart(editor, id) {
  const { children: nodes } = editor;
  const lists = nodes.filter(node => node.type === type.NUMBER && node.follow);
  const index = lists.findIndex(node => node.id === id);

  if (index === 0) {
    return 1;
  }

  return lists
    .slice(0, index)
    .reduce((stack, node) => stack + node.children.length, 1);
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
            children: [],
            follow: true,
            id: shortid.generate(),
            type: listType
          }
        : {
            children: [],
            type: listType
          };

    Transforms.wrapNodes(editor, block);
  }
}

export default {
  ...Editor,
  getStart,
  isActive,
  isList,
  isListItem,
  toggle
};
