import ReactMonacoEditor from 'react-monaco-editor';
import React, { useCallback } from 'react';
import useWindowSize from './use-window-size';
import ParentWindowEmitter from './api';
import { useEffect, useState } from 'react';

const JsonMonacoEditor = ({ onChange, options, reloadInitialCode, uid, ...restProps }) => {
  const [stateProps, setStateProps] = useState(null);
  let editor;
  let api;

  const handleChange = useCallback((newCode) => {
    if (api) {
      api.onChange(newCode);
      api.onValidJsonChange(newCode);
    }
    onChange && onChange(newCode);
  }, [api]);

  useWindowSize({
    onResize() {
      editor && editor.layout();
    },
  });

  useEffect(() => {
    api = new ParentWindowEmitter({ uid });
    api.onLoad();
    return api.addOnLoadReceivedListener((data) => {
      setStateProps(data);
    });
  }, []);

  const editorDidMount = (
    _editor,
    monaco,
  ) => {
    editor = _editor;
    editor.focus();
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

  if (!stateProps) {
    return null;
  }

  return (
    <ReactMonacoEditor
      height="100vh"
      width="10vw"
      theme="vs"
      language="json"
      {...restProps}
      {...stateProps}
      onChange={handleChange}
      editorDidMount={editorDidMount}
    />
  );
};

export default JsonMonacoEditor;
