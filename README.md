# vanilla-css-in-js

Vanilla JavaScript CSS-in-JS

--------

## Installation

`npm i vanilla-css-in-js`

## Usage

```javascript
// rules :: { [string]: string }
// style :: rules -> HTMLElement -> void
// create :: string -> HTMLElement
// createStyled  :: string -> rules -> HTMLElement

import { style, create, createStyled } from 'vanilla-css-in-js'

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
