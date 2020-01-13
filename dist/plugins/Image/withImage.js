import isUrl from '../../helpers/isUrl';
import ImageEditor from './ImageEditor';
export function isImageUrl(str) {
  if (!str || !isUrl(str)) {
    return false;
  }

  const ext = new URL(str).pathname.split('.').pop();
  return ['jpg', 'jpeg', 'png', 'svg'].includes(ext);
}

function withImage(editor) {
  const {
    insertData,
    isVoid
  } = editor;

  editor.insertData = data => {
    const text = data.getData('text/plain');
    const {
      files
    } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split('/');

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result;
            ImageEditor.insert(editor, url);
          });
          reader.readAsDataUrl(file);
        }
      }
    } else if (isImageUrl(text)) {
      ImageEditor.insert(editor, text);
    } else {
      insertData(data);
    }
  };

  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element);
  };

  return editor;
}

export default withImage;