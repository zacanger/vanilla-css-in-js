# vanilla-css-in-js

Vanilla JavaScript CSS-in-JS

--------

## Installation

`npm i vanilla-css-in-js`

## Usage

This library doesn't support a whole lot. No media queries, no extraction into a
stylesheet, no nested selectors, no states (hover/focus/active). This is the
bare minimum I need to comfortably write styles in plain JS for very small
projects. If you need something with any features at all, I highly recommend
checking out [cxs](https://github.com/cxs-css/cxs).

Example:

```javascript
// rules :: { [key: string]: string }
// style :: rules -> HTMLElement -> void
// create :: string -> HTMLElement
// createStyled  :: string -> rules -> HTMLElement

const { style, create, createStyled } = require('vanilla-css-in-js')
// or const style = require('vanilla-css-in-js')
// or import { style, create, createStyled } from 'vanilla-css-in-js'
// or import style, { create, createStyled } from 'vanilla-css-in-js'
// do what you want, really

// style
const cardStyle = {
  margin: '8px',
  border: '1px solid rebeccapurple'
}
const styleCard = style(cardStyle)
document.getElementsByTagName('section').forEach((card) => {
  styleCard(card)
})

// create
const header = create('h1')

// createStyled
const paragraph = createStyled('p')
const p = paragraph({
  fontSize: '16px',
  color: '#202020'
})
```

## License

[MIT](./LICENSE.md)
