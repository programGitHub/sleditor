import ListEditor from './ListEditor';
import { Node, Transforms } from 'slate';

function withList(editor) {
  const {
    normalizeNode
  } = editor;

  editor.normalizeNode = function (entry) {
    const [node, path] = entry;

    if (ListEditor.isList(node)) {
      for (const [child, childPath] of Node.children(editor, path)) {
        if (!ListEditor.isListItem(child)) {
          Transforms.unwrapNodes(editor, {
            at: childPath,
            match: n => n.type === 'list-bullet' || n.type === 'list-number',
            split: true
          });
          return;
        }
      }
    }

    normalizeNode(entry);
  };

  return editor;
}

export default withList;