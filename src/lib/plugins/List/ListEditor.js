import { Editor, Element, Transforms } from 'slate';

const type = {
  BULLET: 'list-bullet',
  ITEM: 'list-item',
  NUMBER: 'list-number'
};

function getStart(editor, id) {
  const { children: nodes } = editor;
  const lists = nodes.filter(node => node.type === type.NUMBER);
  const index = lists.findIndex(node => node.id === id);

  if (index === 0) {
    return 1;
  }

  const antecedents = lists.slice(0, index);
  const last = antecedents.pop();

  if (!last) {
    return 1;
  }

  if (!last.follow) {
    return last.children.length + 1;
  }

  return getStart(editor, last.id) + last.children.length;
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
            type: listType
          }
        : {
            children: [],
            type: listType
          };

    Transforms.wrapNodes(editor, block);
  }
}

function update(editor, id, data) {
  Transforms.setNodes(editor, data, {
    at: [],
    match: n => n.id === id
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
