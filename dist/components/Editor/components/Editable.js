function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

        Transforms.insertNodes(editor, {
          children: [{
            text: ''
          }],
          type: 'paragraph'
        }, {
          at: EditorSlate.end(editor, p)
        });
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

        Transforms.insertNodes(editor, {
          children: [{
            text: ''
          }],
          type: 'paragraph'
        }, {
          at: p
        });
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
  return React.createElement(SlateEditable, _extends({}, props, {
    onKeyDown: e => {
      for (const hotkey in HOTKEYS) {
        if (isHotkey(hotkey, e)) {
          e.preventDefault();
          HOTKEYS[hotkey](editor);
        }
      }
    },
    renderElement: renderElement,
    renderLeaf: renderLeaf
  }));
};

export default Editable;