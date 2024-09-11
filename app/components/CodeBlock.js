import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ codeString, language }) => {
  return (
    <div>
      <SyntaxHighlighter language={language} style={gruvboxDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
