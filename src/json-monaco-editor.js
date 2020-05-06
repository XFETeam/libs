import ReactMonacoEditor from 'react-monaco-editor';
import React from 'react';
import getProvideCompletionItems from './get-provide-completion-items';
import useWindowSize from './use-window-size';
import ParentWindowEmitter from './api';

const JsonMonacoEditor = ({ onChange, code, reloadInitialCode }) => {
  let editor;
  let api;

  const options = {
    selectOnLineNumbers: true
  };

  const handleChange = (newCode) => {
    if(api) {
       api.onChange(newCode);
       api.onValidJsonChange(newCode);
     }
     onChange && onChange(newCode);
  };

  useWindowSize({
    onResize() {
      editor && editor.layout();
    },
  });

  React.useEffect(()=> {
    api = new ParentWindowEmitter();
  }, []);

  const editorDidMount = (
    _editor,
    monaco,
  ) => {
    editor = _editor;
    editor.focus();
    /**
     * 详细请参考:
     * https://github.com/microsoft/monaco-editor/issues/1768
     * https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-completion-provider-example
     */
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: getProvideCompletionItems(monaco),
    });
    editor.addAction({
      id: 'format',
      label: 'format label',
      // eslint-disable-next-line no-bitwise
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_F],
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run(ed) {
        const action = ed.getAction('editor.action.formatDocument');
        action && action.run();
      },
    });
    editor.addAction({
      id: 'reload_init_code',
      label: 'reload initialize code',
      // eslint-disable-next-line no-bitwise
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_R],
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run() {
        reloadInitialCode && reloadInitialCode();
      },
    });
  };

  return (
    <ReactMonacoEditor
      height="600"
      language="json"
      theme="vs"
      value={code}
      options={options}
      onChange={handleChange}
      editorDidMount={editorDidMount}
    />
  );
};

export default JsonMonacoEditor;
