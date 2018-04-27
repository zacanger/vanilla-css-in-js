// yeah i just hand-rolled my own UMD
// with esm support, what of it

;(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory)
  } else if (typeof exports !== 'undefined') {
    factory(exports)
  } else {
    var mod = {
      exports: {}
    }
    factory(mod.exports)
    global.actual = mod.exports
  }
})(this, function (exports) {
  'use strict'
  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var style = function style (rules) {
    return function (element) {
      Object.keys(rules).forEach(function (rule) {
        element.style[rule] = rules[rule]
      })
    }
  }
  exports.default = style
  module.exports = exports['default']
})
