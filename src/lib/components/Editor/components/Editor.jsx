import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import { createEditor } from 'slate';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { Slate, withReact } from 'slate-react';
import { withFormula } from 'lib/plugins/Formula';
import { withHighlight } from 'lib/plugins/Highlight';
import { withImage } from 'lib/plugins/Image';
import { withLink } from 'lib/plugins/Link';
import { withList } from 'lib/plugins/List';
import { withHistory } from 'slate-history';
// import 'typeface-roboto';

/**
 * Editor
 */
const Editor = ({ children, onChange, value }) => {
  const editor = useMemo(
    () =>
      withHistory(
        withFormula(
          withHighlight(
            withList(withImage(withLink(withReact(createEditor()))))
          )
        )
      ),
    []
  );

  // console.log(editor.children);

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container>
        <Slate editor={editor} onChange={onChange} value={value}>
          {children}
        </Slate>
      </Container>
    </React.Fragment>
  );
};

Editor.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Editor;
