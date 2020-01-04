function withFormula(editor) {
  const { isInline, isVoid } = editor;

  editor.isInline = element => {
    return element.type === 'formula_inline' ? true : isInline(element);
  };

  editor.isVoid = element => {
    if (element.type === 'formula_block') {
      return true;
    }

    if (element.type === 'formula_inline') {
      return true;
    }

    return isVoid(element);
  };

  return editor;
}

export default withFormula;
