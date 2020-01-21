import React, { useCallback } from 'react';
import { Editable as SlateEditable, useSlate } from 'slate-react';
import { Editor as EditorSlate, Path, Transforms } from 'slate';
import Element from './Element';
import isHotkey from 'is-hotkey';
import Leaf from './Leaf';

const HOTKEYS = {
  'mod+d': editor => {
    if (editor.selection) {
      const path = Path.ancestors(editor.selection.anchor.path, {
        reverse: true
      });

      for (const p of path) {
        const n = EditorSlate.node(editor, p)[0];

        if (editor.isInline(n)) {
          continue;
        }

        Transforms.insertNodes(
          editor,
          {
            children: [{ text: '' }],
            type: 'paragraph'
          },
          {
            at: EditorSlate.end(editor, p),
            select: true
          }
        );

        break;
      }
    }
  },
  'mod+u': editor => {
    if (editor.selection) {
      const path = Path.ancestors(editor.selection.anchor.path, {
        reverse: true
      });

      for (const p of path) {
        const n = EditorSlate.node(editor, p)[0];

        if (editor.isInline(n)) {
          continue;
        }

        Transforms.insertNodes(
          editor,
          {
            children: [{ text: '' }],
            type: 'paragraph'
          },
          {
            at: p,
            select: true
          }
        );

        break;
      }
    }
  }
};

/**
 * Editable
 */
const Editable = props => {
  const editor = useSlate();
  const renderElement = useCallback(Element, []);
  const renderLeaf = useCallback(Leaf, []);

  return (
    <SlateEditable
      {...props}
      onKeyDown={e => {
        for (const hotkey in HOTKEYS) {
          if (isHotkey(hotkey, e)) {
            e.preventDefault();
            HOTKEYS[hotkey](editor);
          }
        }
      }}
      renderElement={renderElement}
      renderLeaf={renderLeaf}
    />
  );
};

export default Editable;
