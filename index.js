module.exports = (style) => (element) => {
  Object.keys(style).forEach((rule) => {
    element.style[rule] = style[rule]
  })
}
