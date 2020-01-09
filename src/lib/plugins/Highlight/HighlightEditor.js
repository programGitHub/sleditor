import { Editor, Element, Transforms } from 'slate';

const TYPE = 'highlight';

function isActive(editor, category) {
  const [node] = Editor.nodes(editor, {
    match: n => n.type === TYPE && n.category === category
  });

  return Boolean(node);
}

function isHighlight(node) {
  return Element.isElement(node) && node.type === TYPE;
}

function toggle(editor, category, selection) {
  Transforms.select(editor, selection);
  const active = isActive(editor, category);

  Transforms.unwrapNodes(editor, {
    match: n => n.type === TYPE,
    split: true
  });

  // Transforms.setNodes(editor, {
  //   type: 'paragraph'
  // });

  if (!active) {
    const block = {
      category,
      children: [],
      type: TYPE
    };

    Transforms.wrapNodes(editor, block);
  }
}

function update(editor, data) {
  Transforms.setNodes(editor, data, { match: n => n.type === TYPE });
}

export default {
  ...Editor,
  isActive,
  isHighlight,
  toggle,
  update
};
