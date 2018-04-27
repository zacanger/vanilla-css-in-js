const style = (rules) => (el) => {
  Object.keys(rules).forEach((rule) => {
    el.style[rule] = rules[rule]
  })
}

const create = (el) => document.createElement(el)

const createStyled = (el) => (rules) => {
  const e = h(el)
  style(rules)(e)
  return e
}

module.exports = {
  style,
  create,
  createStyled
}
