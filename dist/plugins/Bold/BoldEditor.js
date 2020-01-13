import { Editor } from 'slate';

const isBold = editor => {
  const marks = Editor.marks(editor);
  return marks ? marks['bold'] === true : false;
};

const toggleBold = editor => {
  if (isBold(editor)) {
    Editor.removeMark(editor, 'bold');
  } else {
    Editor.addMark(editor, 'bold', true);
  }
};

export default { ...Editor,
  isBold,
  toggleBold
};