import HighlighEditor from './HighlightEditor';
import { Element, Node, Transforms } from 'slate';

function withHighlight(editor) {
  const { normalizeNode } = editor;

  editor.normalizeNode = function(entry) {
    const [node, path] = entry;

    if (HighlighEditor.isHighlight(node)) {
      for (const [child, childPath] of Node.children(editor, path)) {
        if (
          Element.isElement(child) &&
          !editor.isInline(child) &&
          child.type !== 'paragraph' &&
          child.type !== 'list-number' &&
          child.type !== 'list-bullet' &&
          child.type !== 'list-item'
        ) {
          Transforms.unwrapNodes(editor, {
            at: childPath,
            match: n => n.type === 'highlight',
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

export default withHighlight;
