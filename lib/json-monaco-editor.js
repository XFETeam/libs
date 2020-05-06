"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactMonacoEditor = _interopRequireDefault(require("react-monaco-editor"));

var _react = _interopRequireDefault(require("react"));

var _getProvideCompletionItems = _interopRequireDefault(require("./get-provide-completion-items"));

var _useWindowSize = _interopRequireDefault(require("./use-window-size"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var JsonMonacoEditor = function JsonMonacoEditor(_ref) {
  var onChange = _ref.onChange,
      code = _ref.code,
      reloadInitialCode = _ref.reloadInitialCode;
  var editor;
  var api;
  var options = {
    selectOnLineNumbers: true
  };

  var handleChange = function handleChange(newCode) {
    if (api) {
      api.onChange(newCode);
      api.onValidJsonChange(newCode);
    }

    onChange && onChange(newCode);
  };

  (0, _useWindowSize["default"])({
    onResize: function onResize() {
      editor && editor.layout();
    }
  });

  _react["default"].useEffect(function () {
    api = new _api["default"]();
  }, []);

  var editorDidMount = function editorDidMount(_editor, monaco) {
    editor = _editor;
    editor.focus();
    /**
     * 详细请参考:
     * https://github.com/microsoft/monaco-editor/issues/1768
     * https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-completion-provider-example
     */

    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: (0, _getProvideCompletionItems["default"])(monaco)
    });
    editor.addAction({
      id: 'format',
      label: 'format label',
      // eslint-disable-next-line no-bitwise
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_F],
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run: function run(ed) {
        var action = ed.getAction('editor.action.formatDocument');
        action && action.run();
      }
    });
    editor.addAction({
      id: 'reload_init_code',
      label: 'reload initialize code',
      // eslint-disable-next-line no-bitwise
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_R],
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run: function run() {
        reloadInitialCode && reloadInitialCode();
      }
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_reactMonacoEditor["default"], {
    height: "600",
    language: "json",
    theme: "vs",
    value: code,
    options: options,
    onChange: handleChange,
    editorDidMount: editorDidMount
  });
};

var _default = JsonMonacoEditor;
exports["default"] = _default;