import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonBold } from 'lib/plugins/Bold';
import {
  Button as ButtonHighlight,
  withHighlight
} from 'lib/plugins/Highlight';
import { Button as ButtonImage, withImage } from 'lib/plugins/Image';
import { Button as ButtonLink, withLink } from 'lib/plugins/Link';
import ButtonReadOnly from './ButtonReadOnly';
import { Button as ButtonTitle } from 'lib/plugins/Title';
import { ButtonBullet, ButtonNumber, withList } from 'lib/plugins/List';
import Container from './Container';
import { createEditor } from 'slate';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Editable, Slate, withReact } from 'slate-react';
import Element from './Element';
import Leaf from './Leaf';
import Toolbar from '@material-ui/core/Toolbar';
import { withParagraph } from 'lib/plugins/Paragraph';
import 'typeface-roboto';

/**
 * Editor
 */
const Editor = ({ onChange, value }) => {
  const [readOnly, setReadOnly] = useState(false);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(
    () =>
      withParagraph(
        withHighlight(withList(withImage(withLink(withReact(createEditor())))))
      ),
    []
  );

  console.log(editor.children);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Slate editor={editor} onChange={onChange} value={value}>
          <Toolbar>
            <ButtonBold />
            <ButtonTitle />
            <ButtonLink />
            <ButtonImage />
            <ButtonHighlight />
            <ButtonBullet />
            <ButtonNumber />
            <ButtonReadOnly
              color={readOnly ? 'secondary' : 'default'}
              onClick={() => {
                setReadOnly(!readOnly);
              }}
            />
          </Toolbar>
          <Editable
            readOnly={readOnly}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
          />
        </Slate>
      </Container>
    </React.Fragment>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Editor;
