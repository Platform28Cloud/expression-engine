# Snapshot report for `test/array-index.js`

The actual snapshot is saved in `array-index.js.snap`.

Generated by [AVA](https://ava.li).

## array index

    {
      ast: {
        object: {
          name: 'a',
          range: [
            0,
            1,
          ],
          type: 'Identifier',
        },
        property: {
          range: [
            2,
            3,
          ],
          type: 'NumericLiteral',
          value: 0,
        },
        range: [
          0,
          4,
        ],
        type: 'MemberExpression',
      },
      result: 1,
      tokens: [
        {
          name: 'a',
          range: [
            0,
            1,
          ],
          type: 'Identifier',
        },
        {
          range: [
            1,
            2,
          ],
          type: 'PunctuatorToken',
          value: '[',
        },
        {
          range: [
            2,
            3,
          ],
          type: 'NumericLiteral',
          value: 0,
        },
        {
          range: [
            3,
            4,
          ],
          type: 'PunctuatorToken',
          value: ']',
        },
      ],
    }