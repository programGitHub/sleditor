import isUrl from 'lib/helpers/isUrl';
import LinkEditor from './LinkEditor';

function withLink(editor) {
  const { insertData, insertText, isInline } = editor;

  editor.insertData = data => {
    const text = data.getData('text/plain');

    if (text && isUrl(text)) {
      LinkEditor.wrap(editor, text);
    } else {
      insertData(data);
    }
  };

  editor.insertText = text => {
    if (text && isUrl(text)) {
      LinkEditor.wrap(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.isInline = element => {
    return element.type === 'link' ? true : isInline(element);
  };

  return editor;
}

export default withLink;
