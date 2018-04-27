# vanilla-css-in-js

Vanilla JavaScript CSS-in-JS

--------

## Installation

`npm i vanilla-css-in-js`

## Usage

```javascript
import style from 'vanilla-css-in-js'

const cardStyle = {
  margin: '8px',
  border: '1px solid rebeccapurple'
}

const styleCard = style(cardStyle)

document.getElementsByTagName('section').forEach((card) => {
  styleCard(card)
})
```

## License

[MIT](./LICENSE.md)
