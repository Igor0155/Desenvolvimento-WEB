import React, { useState, useEffect } from 'react';

function LikeButton() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Update the document title using the browser API
  useEffect(() => {
    document.title = `Você gostou ${count} vez(es)`;
  });

  return (
    <div style={{ height: '50px' }}>
      <button onClick={() => setCount(count + 1)}>
        Gostei
      </button>
      <p>Você gostou {count} vez(es)</p>
    </div>
  );
}

export default LikeButton;