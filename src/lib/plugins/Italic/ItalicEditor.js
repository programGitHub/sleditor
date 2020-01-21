import { Editor } from 'slate';

const isActive = editor => {
  const marks = Editor.marks(editor);
  return marks ? marks['italic'] === true : false;
};

const toggle = editor => {
  if (isActive(editor)) {
    Editor.removeMark(editor, 'italic');
  } else {
    Editor.addMark(editor, 'italic', true);
  }
};

export default {
  ...Editor,
  isActive,
  toggle
};
