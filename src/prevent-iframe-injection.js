/** @module prevent-iframe-injection */
/**
 * 防止劫持并被 iframe 注入
 */
export default function preventIframeInjection() {
  window.top.addEventListener(
    'DOMNodeInserted',
    function(event) {
      const sourceElement = event.srcElement;
      if (sourceElement.tagName.toLowerCase() === 'iframe' && sourceElement.hasAttribute('id') && sourceElement.getAttribute('id').indexOf('#dlFrame') !== -1) {
        var downloadLink = sourceElement.getAttribute('src');
        sourceElement.parentNode.removeChild(sourceElement);

        window.open(downloadLink);
      }
    },
    false
  );
}
