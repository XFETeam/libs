const getProvideCompletionItems = (monaco) => {
  const suggestions = [
    {
      label: '"$c"',
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: '"$$$": "component"',
    },
    {
      label: '"$f"',
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: '"$$$": "function"',
    },
    {
      label: '"registryName"',
      kind: monaco.languages.CompletionItemKind.Field,
      insertText: '"registryName"',
    },
    {
      label: '"componentName"',
      kind: monaco.languages.CompletionItemKind.Function,
      // eslint-disable-next-line no-template-curly-in-string
      insertText: '"componentName": "${1:ams}"',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: '"functionName"',
      kind: monaco.languages.CompletionItemKind.Function,
      // eslint-disable-next-line no-template-curly-in-string
      insertText: '"functionName": "${1:ams}"',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
  ];
  return () => ({
    suggestions,
  });
};

export default getProvideCompletionItems;
