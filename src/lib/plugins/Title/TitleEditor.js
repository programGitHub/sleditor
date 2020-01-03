import { Editor, Transforms } from 'slate';

const isActive = editor => {
  const [match] = Editor.nodes(editor, { match: n => n.type === 'title' });

  return Boolean(match);
};

const toggle = editor => {
  const isTitle = isActive(editor);

  Transforms.setNodes(editor, {
    type: isTitle ? 'pararaph' : 'title'
  });
};

export default {
  ...Editor,
  isActive,
  toggle
};
