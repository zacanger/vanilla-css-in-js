const style = (rules) => (el) => {
  Object.keys(rules).forEach((rule) => {
    el.style[rule] = rules[rule]
  })
}

const create = (el) => document.createElement(el)

const createStyled = (el) => (rules) => {
  const e = create(el)
  style(rules)(e)
  return e
}

module.exports = style
module.exports.create = create
module.exports.style = style
module.exports.createStyled = createStyled
