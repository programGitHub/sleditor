import shortid from 'shortid';
import { Text, Transforms } from 'slate';

function withID(editor) {
  const { normalizeNode } = editor;

  editor.normalizeNode = function([node, path]) {
    if (path.length !== 0) {
      if (!Text.isText(node) && !Object.hasOwnProperty.call(node, 'id')) {
        Transforms.setNodes(
          editor,
          { ...node, id: shortid.generate() },
          { at: path }
        );

        return;
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
}

export default withID;
