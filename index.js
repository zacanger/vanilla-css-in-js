var style = function style (rules) {
  return function (element) {
    Object.keys(rules).forEach(function (rule) {
      element.style[rule] = rules[rule]
    })
  }
}

module.exports = style
