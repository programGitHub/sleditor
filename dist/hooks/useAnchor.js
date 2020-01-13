import { useState } from 'react';

function useAnchor(initialState = null) {
  const [anchor, setAnchor] = useState(initialState);

  const onClose = () => {
    setAnchor(null);
  };

  const onOpen = e => {
    setAnchor(e.target);
  };

  return [anchor, onClose, onOpen];
}

export default useAnchor;