function create (el) {
  return document.createElement(el)
}

function style (rules) {
  return function (el) {
    Object.keys(rules)
      .forEach(function (rule) {
        el.style[rule] = rules[rule]
      })
  }
}

function createStyled (el) {
  return function (rules) {
    var e = create(el)
    style(rules)(e)
    return e
  }
}

var _exports = style
_exports.create = create
_exports.style = style
_exports.createStyled = createStyled

// UMD-ish + ES modules
if (typeof module !== 'undefined' && typeof exports === 'object') {
  Object.defineProperty(exports, '__esmodule', {
    value: true
  })
  module.exports = _exports
  module.exports.default = style
} else if (typeof window !== 'undefined') {
  window.__styled = _exports
} else if (typeof global !== 'undefined' && typeof global === 'object') {
  global.styled = _exports
}
