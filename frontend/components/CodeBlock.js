import React from 'react';

const CodeBlock = ({ value }) => {
  return (
    <pre>
      <code>{value.code}</code>
    </pre>
  );
};

export default CodeBlock;