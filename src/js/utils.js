// Common utility functions
export const add = (a, b) => a + b;

export const createElement = (tag, content, className) => {
  const el = document.createElement(tag);
  if (content) el.textContent = content;
  if (className) el.className = className;
  return el;
};