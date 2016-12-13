module.exports = function process(node) {
  if (node.nodeType==3 && !node.nodeValue.trim()) node.remove();
  for (var i=(node.childNodes || '').length; i--; ) process(node.childNodes[i]);
};
