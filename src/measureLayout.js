const getRect = (node) => {
  const r = node.getBoundingClientRect();

  return {
    height: r.height,
    left: r.left,
    top: r.top,
    width: r.width
  };
};

const measureLayout = (node, callback) => {
  const relativeNode = node && node.parentNode;

  if (node && relativeNode) {
    const relativeRect = getRect(relativeNode);
    const {height, left, top, width} = getRect(node);
    const x = left - relativeRect.left;
    const y = top - relativeRect.top;

    callback(x, y, width, height, left, top);
  }
};

export default measureLayout;
