import { Transforms } from 'slate';

function withParagraph(editor) {
  const { normalizeNode } = editor;

  editor.normalizeNode = function([node, path]) {
    const { children } = editor;

    if (path.length === 0) {
      if (
        !children.length ||
        children[children.length - 1].type !== 'paragraph'
      ) {
        const paragraph = {
          children: [{ text: '' }],
          type: 'paragraph'
        };

        Transforms.insertNodes(editor, paragraph, { at: [children.length] });
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
}

export default withParagraph;
