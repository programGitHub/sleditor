import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import { withFormula } from '../../../plugins/Formula';
import { withHighlight } from '../../../plugins/Highlight';
import { withImage } from '../../../plugins/Image';
import { withLink } from '../../../plugins/Link';
import { withList } from '../../../plugins/List';
import { withHistory } from 'slate-history';
/**
 * Editor
 */

const Editor = ({
  children,
  onChange,
  value
}) => {
  const editor = useMemo(() => withHistory(withFormula(withHighlight(withList(withImage(withLink(withReact(createEditor()))))))), []); // console.log(editor.children);

  return React.createElement(Slate, {
    editor: editor,
    onChange: onChange,
    value: value
  }, children);
};

Editor.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default Editor;